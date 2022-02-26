import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  AlignView,
  Container,
  Header, HeaderImage,
  NextIcon,
  SpaceView, SettingsMenuView, SettingsItemView,
  SettingsImageView, SettingsItemText, SettingsImage,
  SettingsLink,
  SubHrView, SettignsLeftView, SettingsRightView,
  UserProfileView, UserImageBackgroundView, UserImage,
  UserInfoView, UserText, UserAboutText,
} from './styles';
import HeaderView from '~/components/HeaderView'
import { signOut } from '../../store/modules/auth/actions';
import insert from '~/assets/insert_photo-24px.svg';
import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';

export default function SettingsPage({ navigation }) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.profile)

  const [artigo, setArtigo] = useState();

  useEffect(() => {
    if (userData.gender === 'feminino') {
      setArtigo('a')
    } else {
      setArtigo('o')
    }
  }, [userData])

  function handleUpdateProfile() {
    navigation.navigate('UpdateProfile')
  }

  function handleSignOut() {
    // userData.avatar.url = insert
    // console.tron.log(userData.avatar)
    dispatch(signOut())
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      {/* <Header>
        <SpaceView>
          <HeaderImage
            source={godtaskerFont}
          />
        </SpaceView>
        <HeaderView data="Configurações"/>
        <SpaceView/>
      </Header> */}
      <UserProfileView>
        { userData === undefined || userData.avatar === null
          ? (
            <>
              <UserImageBackgroundView>
                <UserImage
                  // source={require('~/assets/insert_photo-24px.svg')}
                  source={defaultAvatar}
                />
              </UserImageBackgroundView>
              {/* <UserText>n/a</UserText> */}
            </>
          )
          : (
            <UserImageBackgroundView>
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
        <UserInfoView>
          <UserText>{userData.user_name}</UserText>
          <UserAboutText numberOfLines={1}>
            { userData.bio
              ? userData.bio
              : `Sou ${artigo} melhor ${userData.user_name} que existe!`
            }
          </UserAboutText>
        </UserInfoView>
      </UserProfileView>

      <SettingsMenuView>
        <SettingsItemView>
          <SettingsImageView>
            <SettingsImage name="key" size={24}/>
          </SettingsImageView>
          <SettingsItemText>Edit Account</SettingsItemText>
          <SettingsLink onPress={() => handleUpdateProfile()}>
            <NextIcon name="arrow-right" size={16}></NextIcon>
          </SettingsLink>
        </SettingsItemView>
        <SubHrView/>

        <SettingsItemView>
          <SettingsImageView>
            <SettingsImage name="info" size={24} style={{color: '#ddd'}}/>
          </SettingsImageView>
          <SettingsItemText style={{color: '#ddd'}}>Help</SettingsItemText>
            <SettingsLink>
              <NextIcon name="arrow-right" size={16} style={{color: '#ddd'}}></NextIcon>
            </SettingsLink>
          </SettingsItemView>
          <SubHrView/>

        <SettingsItemView>
          <SettingsImageView>
            <SettingsImage name="heart" size={24} style={{color: '#ddd'}}/>
          </SettingsImageView>
          <SettingsItemText style={{color: '#ddd'}}>Share godtasker</SettingsItemText>
          <SettingsLink>
            <NextIcon name="arrow-right" size={16} style={{color: '#ddd'}}></NextIcon>
          </SettingsLink>
        </SettingsItemView>
        <SubHrView/>

        <SettingsItemView>
          <SettingsImageView>
            <SettingsImage name="log-out" size={24}/>
          </SettingsImageView>
          <SettingsItemText>Exit</SettingsItemText>
          <SettingsLink onPress={() => handleSignOut()}>
            <NextIcon name="arrow-right" size={16}></NextIcon>
          </SettingsLink>
        </SettingsItemView>
        {/* <SubHrView/> */}

      </SettingsMenuView>
    </Container>
  )
}
