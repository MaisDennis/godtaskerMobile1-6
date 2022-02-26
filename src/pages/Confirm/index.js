import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
// import CameraRollPicker from 'react-native-camera-roll-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import {
  Container, TitleView, TaskName,
  CameraButton, CameraView, CameraButtonBackground,
  CameraReverseButton, CameraRollButton,
  FlashButton, FooterView,
  // StyledScrollView,
  StyledRNCamera,
} from './styles';
import api from '~/services/api';
import { updateImageRequest } from '~/store/modules/image/actions';
// -----------------------------------------------------------------------------
export default function Confirm({ route }) {
  const { task_id, taskName } = route.params;
  const [ photoImage, setPhotoImage] = useState();
  const [toggleFlash, setToggleFlash] = useState(true);
  const [toggleCameraReverse, setToggleCameraReverse] = useState(true);
  const camera = useRef(null);

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        // forceUpOrientation: true,
        // fixOrientation: true,
      };
      const data = await camera.current.takePictureAsync(options);

      //************* */
      // console.tron.log(data);
      // const formData = new FormData();

      // formData.append('signature', {
      //   // uri: data.uri,
      //   // // name: `Signature${data.uri}.jpg`,
      //   // type: 'image/jpg',
      //   // name: `${data.uri}_${'1'}.jpg`,
      //   uri: data.uri,
      //   type: 'image/*',
      //   name: `signature_${task_id}.jpg`,
      // });

      const formData = new FormData();
      formData.append('signatureImage', {
        uri: Platform.OS === 'ios' ? data.sourceURL : data.uri,
        // uri: data.uri,
        type: "image/jpg",
        name: `signature_${task_id}.jpg`,
      });

      try {
        const response = await api.post('signatures', formData,
          // {
          //   headers: {
          //     'accept': 'application/json',
          //     'Accept-Language': 'en-US,en;q=0.8',
          //     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          //   }
          // }
        );

        const { signature_id } = response.data;

        await api.put(`tasks/confirm/${task_id}`, {
          signature_id,
        });

        Alert.alert(
          'Confirmação',
          'Enviada com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
      }
      catch {
        Alert.alert(
          'Confirmação',
          'Não foi possível enviar a confirmação.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
      }

    }
  }

  async function takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image)
      const formData = new FormData();
      formData.append('signatureImage', {
        uri: Platform.OS === 'ios' ? image.sourceURL : image.path,
        // uri: image.path,
        // type: "image/jpg",
        type: "image/jpg",
        name: `signature_${task_id}.jpg`,
      });

      try {
        const response = await api.post('signatures', formData);

        const { signature_id } = response.data;

        await api.put(`tasks/confirm/${task_id}`, {
          signature_id,
        });

        Alert.alert(
          'Confirmação',
          'Enviada com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => console.log('OKBJ')
            }
          ],
          {cancelable: false }
        )
      }
      catch {
        Alert.alert(
          'Confirmação',
          'Não foi possível enviar a confirmação.',
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

  async function chooseFromLibrary() {
    // console.warn('choose Photo')
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(async image => {
        console.log(image.path)
        const formData = new FormData();
        formData.append('signatureImage', {
          uri: Platform.OS === 'ios' ? image.sourceURL : image.path,
          // uri: image.path,
          // type: "image/jpg",
          type: "image/*",
          name: `signature_${task_id}.jpg`,
        });

        try {
          const response = await api.post('signatures', formData);

          const { signature_id } = response.data;

          await api.put(`tasks/confirm/${task_id}`, {
            signature_id,
          });

          Alert.alert(
            'Confirmação',
            'Enviada com sucesso!',
            [
              {
                text: 'OK',
                onPress: () => console.log('OKBJ')
              }
            ],
            {cancelable: false }
          )
        }
        catch {
          Alert.alert(
            'Confirmação',
            'Não foi possível enviar a confirmação.',
            [
              {
                text: 'OK',
                onPress: () => console.log('OKBJ')
              }
            ],
            {cancelable: false }
          )
        }
      });

    }
  // -----------------------------------------------------------------------------
  return (
    <>
    {/* <StyledScrollView> */}
      <Container>
        <TitleView>
          <Icon name="clipboard" size={20} style={{ color: '#222'}}/>
          <TaskName>{taskName}</TaskName>
        </TitleView>
        {/* <CameraView> */}
          <StyledRNCamera
            ref={camera}
            type={ toggleCameraReverse
              ? RNCamera.Constants.Type.back
              : RNCamera.Constants.Type.front
            }
            flashMode={ toggleFlash
              ? RNCamera.Constants.FlashMode.off
              : RNCamera.Constants.FlashMode.on
            }
            captureAudio={false}
          />
        {/* </CameraView> */}
        <FlashButton onPress={() => setToggleFlash(!toggleFlash)}>
          { toggleFlash
            ? (
              <Icon name='zap' size={24} color='#fff'/>
            )
            : (
              <Icon name='zap-off' size={24} color='#fff'/>
            )
          }
        </FlashButton>
        <FooterView>
          {/* <CameraRollPicker
            callback={this.myImages.bind(this)}
          /> */}
          <CameraRollButton onPress={() => chooseFromLibrary()}>
            <Icon name='image' size={24} color='#222'/>
          </CameraRollButton>
          {/* <CameraButtonBackground onPress={() => takePicture()}> */}
          <CameraButtonBackground onPress={() => takePhotoFromCamera()}>
            <CameraButton>
              <Icon name='camera' size={24} color='#fff'/>
            </CameraButton>
          </CameraButtonBackground>
          <CameraReverseButton onPress={() => setToggleCameraReverse(!toggleCameraReverse)}>
            <Icon name='users' size={24} color='#222'/>
          </CameraReverseButton>
        </FooterView>
      </Container>
      {/* </StyledScrollView> */}
    </>
  );
}
