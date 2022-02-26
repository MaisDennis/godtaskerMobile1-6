import React, { useState, useEffect } from 'react';
import { Linking, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  BannerImage, BannerView,
  BioText, BlockLarge, BlockLargeBoss,
  BlockLargeWorker, BlockSegment, BlockSmallBoss, BlockSmallWorker,
  ButtonText, ButtonCancelView, ButtonView,
  Container, ContentView,
  DateText,
  FirstNameWrapper, FollowButton, FollowText, FollowingButton, FollowingText, FollowersView, FollowersWrapper, FormScrollView,
  Header, HeaderImage, HeaderTabView, HeaderTouchable, HrLine,
  Iicon, Input,
  Label, LabelBold, LabelBold2, LabelBoldBoss,
  LabelBoldBoss2, LabelBoldRed, LabelBoldSocialMedia,
  LabelBoldWorker, LabelBoldWorker2,
  LabelNormal, LabelNormalBoss, LabelNormalSocialMedia,
  LabelNormalWorker,
  LabelSmallBoss, LabelSmallBoss2, LabelSmallRed, LabelSmallSpace,
  LabelSmallWorker, LabelSmallWorker2, LabelSpace, LeftView, LinkedInWrapper,
  MarginView02, MarginView04, MarginView08,
  MessageButton, MessageIcon,
  ModalButtonView, ModalView, ModalWrapper01, ModalWrapper02,
  SearchBarTextInput, SocialMediaButton, SocialMediaText, SocialMediaView,
  SocialMediaWrapper, SpaceView,
  StatusCircleBoss, StatusCircleRed, StatusCircleWorker,
  StatusLineBoss, StatusLineWorker, StatusView,
  UserImage, UserImageBackgroundView, UserInfoView,
  UserNameText, UserNameWrapper, UserPointsText, UserProfileView, UserView,
} from '../Dashboard/styles'
import api from '~/services/api';
import insert from '~/assets/insert_photo-24px.svg';
import { Dashboard } from '~/pages/Dashboard';
import { updateChatInfo } from '~/store/modules/message/actions';
// -----------------------------------------------------------------------------
export default function WorkerPage({ navigation, route }) {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user.profile.id);
  const user_name = useSelector(state => state.user.profile.user_name);
  const userData = useSelector(state => state.user.profile);

  const data = route.params;
  const worker_id = data.id;
  const worker_name = data.worker_name;
  const first_name = data.first_name;
  const last_name = data.last_name;
  const worker_photo = data.avatar ? data.avatar.url : undefined;
  const instagram_username = data.instagram ? data.instagram : '-'
  const linkedin_username = data.linkedin ? data.linkedin : '-'
  const bio = data.bio ? data.bio : 'There is no bio'
  const userPoints = data.points;
  const workerData = data

  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();
  const [followIndividual, setFollowIndividual] = useState();

  useEffect(() => {
    loadData()
    // console.log(data)
  }, [])

  async function loadData() {
    const followingResponse = await api.get(
      `/users/${user_id}/following/count`
    )
    const followedResponse = await api.get(
      `/workers/${worker_id}/followed/count`
    )
    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: worker_id }
      }
    )

    setFollowIndividual(followIndividualResponse.data[0])
    setCountFollowers(followedResponse.data)
    setCountFollowing(followingResponse.data)
  }

  async function handleStartFollow() {
    await api.post(
      `/users/${user_id}/following`, {
        worker_id: worker_id,
      }
    )

    // const followIndividualResponse = await api.get(
    //   `/users/following/individual`, {
    //     params: { user_id: user_id, worker_id: worker_id }
    //   }
    // )

    // const followedResponse = await api.get(
    //   `/workers/${worker_id}/followed/count`
    // )
    loadData()
    // setCountFollowers(followedResponse.data)
    // setFollowIndividual(followIndividualResponse.data[0])
  }

  async function handleStopFollow() {
    await api.put(
      `/users/${user_id}/following`, {
        worker_id: worker_id,
      }
    )

    // const followIndividualResponse = await api.get(
    //   `/users/following/individual`, {
    //     params: { user_id: user_id, worker_id: worker_id }
    //   }
    // )

    // const followedResponse = await api.get(
    //   `/workers/${worker_id}/followed/count`
    // )
    loadData()
    // setCountFollowers(followedResponse.data)
    // setFollowIndividual(followIndividualResponse.data[0])
  }

  function handleFollow() {
    navigation.navigate('Follow')
  }

  function handleFollowed() {
    navigation.navigate('Followed')
  }

  async function handleMessageConversation() {
    const response = await api.get('/messages', {
      params: {
        user_id: user_id,
        worker_id: worker_id,
      },
    })
    dispatch(updateChatInfo(userData, workerData));

    if(response.data.message === null) {
      const chat_id = Math.floor(Math.random() * 1000000)

      navigation.navigate('MessagesConversationPage', {
        // id: data.id,
        user_id: user_id,
        user_name: user_name,
        userData: userData,
        worker_id: worker_id,
        worker_name: worker_name,
        workerData: data,
        chat_id: chat_id,
        avatar: worker_photo,
        first_message: true,
      });
      return
    }

    navigation.navigate('MessagesConversationPage', {
      // id: data.id,
      user_id: user_id,
      user_name: user_name,
      userData: userData,
      worker_id: worker_id,
      worker_name: worker_name,
      workerData: data,
      avatar: worker_photo,
      chat_id: response.data.message.chat_id,
      inverted: response.data.inverted,
    });
  }

  function handleLinkToInstagram() {
    try {
      Linking.openURL(`instagram://user?username=${instagram_username}`)
    }
    catch(error) {
      console.log(error)
    }
  }

  function handleLinkToLinkedIn() {
    try {
      Linking.openURL(`https://linkedin.com/in${linkedin_username}`)
    }
    catch(error) {
      console.log(error)
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <FormScrollView>
        <MarginView08/>
        <HeaderTabView>
          <MessageButton onPress={handleMessageConversation}>
            <MessageIcon name='message-square'></MessageIcon>
          </MessageButton>
          { followIndividual !== undefined
            ? (
              <FollowingButton onPress={handleStopFollow}>
                <FollowingText>Following</FollowingText>
              </FollowingButton>
            )
            : (
              <FollowButton onPress={handleStartFollow}>
                <FollowText>Follow</FollowText>
              </FollowButton>
            )
          }
        </HeaderTabView>
        <MarginView04/>
        <UserView>
          <LeftView>

            { worker_photo === undefined || worker_photo.url === null
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
                      worker_photo
                        ? { uri: worker_photo }
                        : defaultAvatar
                    }
                  />
                </UserImageBackgroundView>
              )
            }
          </LeftView>
          <UserInfoView>
            <UserNameWrapper>
              <UserNameText>{worker_name}</UserNameText>
              { userPoints
                ? (
                  <LabelNormal>({userPoints})</LabelNormal>
                )
                : (
                  <LabelNormal>(0)</LabelNormal>
                )
              }
              {/* <FirstNameWrapper>
                <LabelBold2>{first_name}</LabelBold2>
                <LabelBold2>{last_name}</LabelBold2>
              </FirstNameWrapper> */}
            </UserNameWrapper>
              <FollowersWrapper>
                <FollowersView onPress={handleFollowed}>
                  <LabelBold>{countFollowers}</LabelBold>
                  <LabelNormal>Followers</LabelNormal>
                </FollowersView>
                <FollowersView onPress={handleFollow}>
                  <LabelBold>{countFollowing}</LabelBold>
                  <LabelNormal>Following</LabelNormal>
                </FollowersView>
              </FollowersWrapper>
          </UserInfoView>
        </UserView>

        <MarginView08/>
        <ContentView>
          <SocialMediaWrapper>
            <SocialMediaView onPress={handleLinkToInstagram}>
              <Iicon name='instagram' size={20}/>
              <SocialMediaText>{instagram_username}</SocialMediaText>
            </SocialMediaView>
            <SocialMediaView onPress={handleLinkToLinkedIn}>
              <Iicon name='linkedin' size={20}/>
              <SocialMediaText>{linkedin_username}</SocialMediaText>
            </SocialMediaView>
          </SocialMediaWrapper>
        </ContentView>
        <MarginView08/>
        <ContentView>
          <StatusView>
            <Label>Bio:</Label>
          </StatusView>
          <MarginView04/>

          <StatusView>
            <BlockLarge>
              <BioText>
                {bio}
              </BioText>
            </BlockLarge>
          </StatusView>
        </ContentView>
      </FormScrollView>
    </Container>
  )
}
