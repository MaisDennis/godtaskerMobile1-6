import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { View, Text, Image } from 'react-native';
import { Container } from './styles';
// import Avatar from '~/pages/Dashboard/styles';
import Input from '~/components/Input';
import insert_photo from '~/assets/insert_photo-24px.svg';
import api from '~/services/api';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      })
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <View htmlFor="avatar">
        <Image source={insert_photo} alt="Insert_photo" size={48}/>
        <Input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
        <Text className="foto">Adicionar foto</Text>
      </View>
    </Container>
  );
}
