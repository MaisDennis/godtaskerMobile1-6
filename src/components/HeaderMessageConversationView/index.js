import React from 'react'
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  AlignView,
  HeaderContainer, HeaderImage, HeaderImageBackgroundView,
  HeaderText,
} from './styles';
import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';

export default function HeaderView({data}) {
  const inverted = data.inverted;
  const header_name = inverted ? data.userData.user_name : data.workerData.worker_name;
  const avatar = inverted ? data.userData.avatar : data.workerData.avatar;

  return (
    <AlignView>
    <HeaderContainer>
      { avatar === undefined || avatar === null
        ? (
          <HeaderImageBackgroundView>
            <HeaderImage source={defaultAvatar}/>
          </HeaderImageBackgroundView>
        )
        : (
          <HeaderImageBackgroundView>
            <HeaderImage
              source={{ uri: avatar.url}}
            />
          </HeaderImageBackgroundView>
        )
      }
      <HeaderText>{header_name}</HeaderText>
    </HeaderContainer>
    </AlignView>
  )
}

