import React from 'react';
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------

import {
  BodyView, BodyWrapper,
  Container,
  DatesAndButtonView,
  LeftContactView,
  MarginView02, MarginView04, MarginView08,
  TextBio, TextPoints, TitleView, TitleText,
  UserImage, UserImageBackground,
} from '../Tasks/styles';


export default function Contacts({ navigation, data }) {
const taskConditionIndex = 1;

  function handleWorkerPage() {
    navigation.navigate('WorkerPage', {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      worker_name: data.worker_name,
      department: data.department,
      points: data.points,
      instagram: data.instagram,
      linkedin: data.linkedin,
      bio: data.bio,
      avatar: data.avatar
    })
  }

  // ---------------------------------------------------------------------------
  return (
    <Container taskConditionIndex={taskConditionIndex} onPress={handleWorkerPage}>
      <LeftContactView>
        { data === undefined || data.avatar === null
          ? (
            <UserImageBackground>
              <UserImage source={defaultAvatar}/>
            </UserImageBackground>

          )
          : (
            <UserImageBackground>
              <UserImage source={{ uri: data.avatar.url }}/>
            </UserImageBackground>
          )
        }
      </LeftContactView>

      <BodyView>
        <BodyWrapper>
        <MarginView04/>
          <TitleView>
            {
              data.worker_name
              ? (
                <TitleText>{data.worker_name}</TitleText>
              )
              : (
                <TitleText>{data.user_name}</TitleText>
              )
            }
            <TextPoints>({data.points})</TextPoints>
          </TitleView>
          <MarginView02/>
          <DatesAndButtonView>
          <TextBio
            numberOfLines={1}
          >
            Carpenter
          </TextBio>
          </DatesAndButtonView>
          <MarginView02/>
          <DatesAndButtonView>


          { data.bio
            ? (
              <TextBio
                numberOfLines={1}
              >
                {data.bio}
              </TextBio>
            )
            : (
              <TextBio
                numberOfLines={1}
              >
                Hello my name is {data.first_name}
              </TextBio>
            )
          }
          </DatesAndButtonView>
          <MarginView04/>
        </BodyWrapper>
      </BodyView>

    </Container>
  )
}
