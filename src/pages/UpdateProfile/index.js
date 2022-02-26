import React, { useState } from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  AllIcon,
  ButtonText,
  Container,
  Form, FormInput,
  ImageWrapper, IosKeyboardAvoidingView,
  MarginView02, MarginView04, MarginView08,
  UserImage, UserImageBackgroundView,
} from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import api from '~/services/api';
import Button from '~/components/Button';
// -----------------------------------------------------------------------------
export default function UpdateProfile({ navigation, route }) {
  const user = useSelector(state => state.user.profile);
  const userData = useSelector(state => state.user.profile)
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [imagePath, setImagePath] = useState();
  const [previewImage, setPreviewImage] = useState();

  async function handleUpdatePhoto() {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(async image => {
      // console.log(image.path)
      setImagePath(image.path)
      const formData = new FormData();
      formData.append('profileImage', {
        uri: Platform.OS === 'ios' ? image.sourceURL : image.path,
        type: "image/jpg",
        name: `profile_${user.id}.jpg`,
      });

      try {
        const response = await api.post('files', formData);
        const { image } = response.data;
        setPreviewImage(image)
      }
      catch(err) {
        Alert.alert(
          'Error loading photo.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
      }
    })
  }

  function handleSubmit() {
    try {
      console.log(email)
      dispatch(updateProfileRequest({
        first_name: firstName,
        last_name: lastName,
        email: email,
        image: previewImage,
        // preview,
      }));
      navigation.goBack();
    }
    catch {
      Alert.alert('Update failed. Error in data')
    }

  }
  // -----------------------------------------------------------------------------
  return (
    <Container>
      <IosKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset = {Platform.OS === "ios" ? "70" : null}
      >
      <Form contentContainerStyle={{ alignItems: 'center' }}>
      <AllIcon name='user'/>
        <ImageWrapper>
          { imagePath
            ? (
              <UserImageBackgroundView onPress={() => handleUpdatePhoto()}>
                <UserImage
                  source={{uri: imagePath}}
                />
              </UserImageBackgroundView>
            )
            : (
              <>
                { userData === undefined || userData.avatar === null
                  ? (
                    <UserImageBackgroundView onPress={() => handleUpdatePhoto()}>
                      <UserImage
                        source={defaultAvatar}
                      />
                    </UserImageBackgroundView>
                  )
                  : (
                    <UserImageBackgroundView onPress={() => handleUpdatePhoto()}>
                      <UserImage
                        source={
                          userData.avatar
                            ? { uri: userData.avatar.url }
                            : defaultAvatar
                        }
                      />
                    </UserImageBackgroundView>
                  )
                }
              </>
            )
          }
        </ImageWrapper>
        <MarginView08/>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Name"
          placeholderTextColor="#999"
          returnKeyType="next"
          value={firstName}
          onChangeText={setFirstName}
        />
        <MarginView04/>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Last Name"
          placeholderTextColor="#999"
          // onSubmitEditing={() => userNameRef.current.focus()}
          value={lastName}
          onChangeText={setLastName}
          // ref={lastNameRef}
        />
        <MarginView08/>
        <Button onPress={handleSubmit}>
          <ButtonText>Send</ButtonText>
        </Button>
      </Form>
      </IosKeyboardAvoidingView>
    </Container>
  );
}
