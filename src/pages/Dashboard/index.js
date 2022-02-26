import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { enUS, pt } from 'date-fns/locale/pt';
import Modal from 'react-native-modal';
import defaultAvatar from '~/assets/defaultAvatar.png';
import { updateProfileRequest } from '~/store/modules/user/actions';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  BannerImage, BannerView,
  BioText, BlockLarge, BlockLargeBoss,
  BlockLargeWorker, BlockSegment, BlockSmallBoss, BlockSmallWorker,
  ButtonWrapper,
  Container, ContentView,
  FirstNameWrapper, FollowersView, FollowersWrapper, FormScrollView,
  Header, HeaderImage, HeaderTabView, HeaderTouchable, HrLine,
  Iicon, Input,
  Label, LabelBold, LabelBold2, LabelBoldBoss,
  LabelBoldBoss2, LabelBoldRed, LabelBoldSocialMedia,
  LabelBoldWorker, LabelBoldWorker2,
  LabelNormal, LabelNormalBoss, LabelNormalSocialMedia,
  LabelNormalWorker,
  LabelSmallBoss, LabelSmallBoss2, LabelSmallRed, LabelSmallSpace,
  LabelSmallWorker, LabelSmallWorker2, LabelSpace, LeftView, LinkedInWrapper,
  MarginView02, MarginView04, MarginView08, ModalView, ModalWrapper01, ModalWrapper02,
  SocialMediaButton, SocialMediaText, SocialMediaView,
  SocialMediaWrapper, SpaceView,
  StatusCircleBoss, StatusCircleRed, StatusCircleWorker,
  StatusLineBoss, StatusLineWorker, StatusView,
  UserImage, UserImageBackgroundView, UserInfoView,
  UserNameText, UserNameWrapper, UserView,
} from './styles'
import logo from '~/assets/detective/detective_remake02.png'
// import banner from '~/assets/detective/font_remake.png'
import banner from '~/assets/detective/font_remake02.png'
import api from '~/services/api';
import Button from '~/components/Button'
// import ButtonForIcon from '~/components/ButtonForIcon'

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user.profile.id);
  const user_email = useSelector(state => state.worker.profile.email);
  const user_photo = useSelector(state => state.user.profile.avatar) || null;
  const worker_id = useSelector(state => state.worker.profile.id);
  console.log(user_photo)
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userUserName, setUserUserName] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [userInstagram, setUserInstagram] = useState();
  const [userLinkedIn, setUserLinkedIn] = useState();
  const [userBio, setUserBio] = useState();

  const [toggleInstagram, setToggleInstagram] = useState();
  const [toggleLinkedIn, setToggleLinkedIn] = useState();
  const [toggleBio, setToggleBio] = useState();

  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();
  const [userCountSent, setUserCountSent] = useState();
  const [userCountInitiated, setUserCountInitiated] = useState();
  const [userCountFinished, setUserCountFinished] = useState();
  const [userCountCanceled, setUserCountCanceled] = useState();
  const [userCountOverDue, setUserCountOverDue] = useState();
  const [userCountTodayDue, setUserCountTodayDue] = useState();
  const [userCountTomorrowDue, setUserCountTomorrowDue] = useState();
  const [userCountThisWeekDue, setUserCountThisWeekDue] = useState();
  const [userPoints, setUserPoints] = useState();
  const [workerCountReceived, setWorkerCountReceived] = useState();
  const [workerCountInitiated, setWorkerCountInitiated] = useState();
  const [workerCountFinished, setWorkerCountFinished] = useState();
  const [workerCountCanceled, setWorkerCountCanceled] = useState();
  const [workerCountOverDue, setWorkerCountOverDue] = useState();
  const [workerCountTodayDue, setWorkerCountTodayDue] = useState();
  const [workerCountTomorrowDue, setWorkerCountTomorrowDue] = useState();
  const [workerCountThisWeekDue, setWorkerCountThisWeekDue] = useState();

  useEffect(() => {
    loadData()
  }, [])

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "MMMM do', 'yyyy", { locale: enUS });

  async function loadData() {
    const user = await api.get(`users/${user_id}`)

    const userResponse = await api.get('/tasks/user/count', {
      params: {
        userID: user_id,
      }
    })

    const workerResponse = await api.get('/tasks/count', {
      params: {
        workerID: worker_id,
      }
    })

    const followingResponse = await api.get(`/users/${user_id}/following/count`)
    const followedResponse = await api.get(`/workers/${worker_id}/followed/count`)
    // console.log(user.data)
    setUserFirstName(user.data.first_name)
    setUserLastName(user.data.last_name)
    setUserUserName(user.data.user_name)
    setUserPhoto(user.data.avatar)
    setUserPoints(user.data.points)
    setUserInstagram(user.data.instagram)
    setUserLinkedIn(user.data.linkedin)
    setUserBio(user.data.bio)

    setCountFollowers(followedResponse.data)
    setCountFollowing(followingResponse.data)
    setUserCountSent(userResponse.data.countSent)
    setUserCountInitiated(userResponse.data.countInitiated)
    setUserCountFinished(userResponse.data.countFinished)
    setUserCountCanceled(userResponse.data.countCanceled)
    setUserCountOverDue(userResponse.data.countOverDue)
    setUserCountTodayDue(userResponse.data.countTodayDue)
    setUserCountTomorrowDue(userResponse.data.countTomorrowDue)
    setUserCountThisWeekDue(userResponse.data.countThisWeekDue)
    setWorkerCountReceived(workerResponse.data.countReceived)
    setWorkerCountInitiated(workerResponse.data.countInitiated)
    setWorkerCountFinished(workerResponse.data.countFinished)
    setWorkerCountCanceled(workerResponse.data.countCanceled)
    setWorkerCountOverDue(workerResponse.data.countOverDue)
    setWorkerCountTodayDue(workerResponse.data.countTodayDue)
    setWorkerCountTomorrowDue(workerResponse.data.countTomorrowDue)
    setWorkerCountThisWeekDue(workerResponse.data.countThisWeekDue)
  }

  function handleRefresh() {
    loadData()
  }

  function handleFollow() {
    navigation.navigate('Follow')
  }

  function handleFollowed() {
    navigation.navigate('Followed')
  }

  function handleSettings() {
    navigation.navigate('Settings');
  }

  function handleToggleInstagram() {
    setToggleInstagram(!toggleInstagram)
  }

  function handleToggleLinkedIn() {
    setToggleLinkedIn(!toggleLinkedIn)
  }

  function handleToggleBio() {
    setToggleBio(!toggleBio)
  }

  async function handleInstagramSubmit() {
    setToggleInstagram(!toggleInstagram)

    dispatch(updateProfileRequest({
      email: user_email,
      instagram: userInstagram,
    }));
  }

  async function handleLinkedInSubmit() {
    setToggleLinkedIn(!toggleLinkedIn)
    dispatch(updateProfileRequest({
      email: user_email,
      linkedin: userLinkedIn,
    }));
  }

  async function handleBioSubmit() {
    setToggleBio(!toggleBio)
    dispatch(updateProfileRequest({
      email: user_email,
      bio: userBio,
    }));
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <FormScrollView>
        <Header>
          <SpaceView>
            <HeaderImage source={logo}/>
          </SpaceView>
          <BannerView>
            <BannerImage source={banner}/>
          </BannerView>
          <HeaderTouchable onPress={handleRefresh}>
            <AddIcon name='refresh-cw' size={20}/>
          </HeaderTouchable>
          <HeaderTouchable onPress={handleSettings}>
            <AddIcon name='settings' size={21}/>
          </HeaderTouchable>
        </Header>
        <MarginView08/>
        <UserView>
          <LeftView>
            { user_photo === undefined || user_photo === null
              ? (
                <>
                  <UserImageBackgroundView>
                    <UserImage
                      source={defaultAvatar}
                    />
                  </UserImageBackgroundView>
                </>
              )
              : (
                <UserImageBackgroundView>
                  <UserImage
                    source={
                      user_photo
                        ? { uri: user_photo.url }
                        : defaultAvatar
                    }
                  />
                </UserImageBackgroundView>
              )
            }
          </LeftView>
          <UserInfoView>
            <UserNameWrapper>
              <UserNameText>{userUserName}</UserNameText>
                { userPoints
                  ? (
                    <LabelNormal>({userPoints})</LabelNormal>
                  )
                  : (
                    <LabelNormal>(0)</LabelNormal>
                  )
                }
            </UserNameWrapper>

            <FirstNameWrapper>
              <LabelBold2>{userFirstName}</LabelBold2>
              <LabelBold2>{userLastName}</LabelBold2>
            </FirstNameWrapper>
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
            <SocialMediaView>
              <SocialMediaButton onPress={handleToggleInstagram}>
                <Iicon name='instagram' size={20}/>
              </SocialMediaButton>
              <SocialMediaText>{userInstagram}</SocialMediaText>
            </SocialMediaView>
            <SocialMediaView>
              <SocialMediaButton onPress={handleToggleLinkedIn}>
                <Iicon name='linkedin' size={20}/>
              </SocialMediaButton>
              <SocialMediaText>{userLinkedIn}</SocialMediaText>
            </SocialMediaView>
          </SocialMediaWrapper>
        </ContentView>
        <MarginView08/>

        <ContentView>
          <StatusView>
            <Label>Received Tasks Status:</Label>
          </StatusView>
          <MarginView04/>
          <StatusView>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountReceived !== 0
                  ? workerCountReceived
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Received</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountInitiated !== 0
                  ? workerCountInitiated
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Open</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountFinished !== 0
                  ? workerCountFinished
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Finished</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountCanceled !== 0
                  ? workerCountCanceled
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Canceled</LabelNormalWorker>
            </BlockSmallWorker>
          </StatusView>
          <MarginView04/>
          <StatusView>
            <BlockLargeWorker>
              <BlockSegment>
                <LabelBoldRed>
                  { workerCountOverDue !== 0
                    ? workerCountOverDue
                    : '-'
                  }
                </LabelBoldRed><LabelSpace/>
                <LabelBoldWorker2>
                  { workerCountTodayDue !== 0
                    ? workerCountTodayDue
                    : '-'
                  }
                </LabelBoldWorker2><LabelSpace/>
                <LabelBoldWorker2>
                  { workerCountTomorrowDue !== 0
                    ? workerCountTomorrowDue
                    : '-'
                  }
                </LabelBoldWorker2><LabelSpace/>
                <LabelBoldWorker2>
                  { workerCountThisWeekDue !== 0
                    ? workerCountThisWeekDue
                    : '-'
                  }
                </LabelBoldWorker2><LabelSpace/>
                <LabelBoldWorker2>
                  { workerCountInitiated !== 0
                    ? workerCountInitiated
                    : '-'
                  }
                </LabelBoldWorker2>
              </BlockSegment>
              <BlockSegment>
                <StatusCircleRed/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/>
              </BlockSegment>
              <BlockSegment>
                <LabelSmallRed>overdue</LabelSmallRed><LabelSmallSpace/>
                <LabelSmallWorker2>due today</LabelSmallWorker2><LabelSmallSpace/>
                <LabelSmallWorker>tomorrow</LabelSmallWorker><LabelSmallSpace/>
                <LabelSmallWorker>this week</LabelSmallWorker><LabelSmallSpace/>
                <LabelSmallWorker2>Total</LabelSmallWorker2>
              </BlockSegment>
            </BlockLargeWorker>
          </StatusView>
        </ContentView>
        <MarginView08/>
        <ContentView>
          <StatusView>
            <Label>Sent Tasks Status:</Label>
          </StatusView>
          <MarginView04/>
          <StatusView>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountSent !== 0
                  ? userCountSent
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Sent</LabelNormalBoss>
            </BlockSmallBoss>

            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountInitiated !== 0
                  ? userCountInitiated
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Open</LabelNormalBoss>
            </BlockSmallBoss>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountFinished !== 0
                  ? userCountFinished
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Finished</LabelNormalBoss>
            </BlockSmallBoss>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountCanceled !== 0
                  ? userCountCanceled
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Canceled</LabelNormalBoss>
            </BlockSmallBoss>
          </StatusView>
          <MarginView04/>
          <StatusView>
            <BlockLargeBoss>
              <BlockSegment>
                <LabelBoldRed>
                  { userCountOverDue !== 0
                    ? userCountOverDue
                    : '-'
                  }
                </LabelBoldRed><LabelSpace/>
                <LabelBoldBoss2>
                  { userCountTodayDue !== 0
                    ? userCountTodayDue
                    : '-'
                  }
                </LabelBoldBoss2><LabelSpace/>
                <LabelBoldBoss2>
                  { userCountTomorrowDue !== 0
                    ? userCountTomorrowDue
                    : '-'
                  }
                </LabelBoldBoss2><LabelSpace/>
                <LabelBoldBoss2>
                  { userCountThisWeekDue !== 0
                    ? userCountThisWeekDue
                    : '-'
                  }
                </LabelBoldBoss2><LabelSpace/>
                <LabelBoldBoss2>
                  { userCountInitiated !== 0
                    ? userCountInitiated
                    : '-'
                  }
                </LabelBoldBoss2>
              </BlockSegment>
              <BlockSegment>
                <StatusCircleRed/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/>
              </BlockSegment>
              <BlockSegment>
                <LabelSmallRed>overdue</LabelSmallRed><LabelSmallSpace/>
                <LabelSmallBoss2>due today</LabelSmallBoss2><LabelSmallSpace/>
                <LabelSmallBoss>tomorrow</LabelSmallBoss><LabelSmallSpace/>
                <LabelSmallBoss>this week</LabelSmallBoss><LabelSmallSpace/>
                <LabelSmallBoss2>Total</LabelSmallBoss2>
              </BlockSegment>
            </BlockLargeBoss>
          </StatusView>
        </ContentView>

        {/* ----------- */}
        <MarginView04/>
        <HrLine/>
        <MarginView04/>
        {/* ----------- */}

        <ContentView>
          <StatusView>
            <Label>Bio:</Label>
          </StatusView>
          <MarginView04/>
          <StatusView>
            <BlockLarge>
              <BioText>{userBio}</BioText>
            </BlockLarge>
          </StatusView>
          {/* ----------- */}
          <MarginView04/>
          <HrLine/>
          <MarginView04/>
          {/* ----------- */}
          <MarginView04/>
          <ButtonWrapper>
            <Button
              small={true}
              onPress={handleToggleBio}
            >
              Edit Bio
            </Button>
          </ButtonWrapper>
          <MarginView08/>
          <MarginView08/>
        </ContentView>
 {/* ----------------------------------------------------------------------- */}
        <Modal isVisible={toggleInstagram}>
          <ModalView>
            <MarginView08/>
            <ModalWrapper01>
              <Label>Edit Instagram user name:</Label>
              <MarginView04/>
              <Input
                enablesReturnKeyAutomatically
                multiline
                value={userInstagram}
                onChangeText={setUserInstagram}
                placeholder="@username"
              />
              {/* ------- */}
              <MarginView04/>
              <HrLine/>
              <MarginView04/>
              {/* ------- */}
              <MarginView04/>
              <Button type={'inverted'} onPress={handleToggleInstagram}>
                Cancel
              </Button>
              <MarginView04/>
              <Button type={'submit'} onPress={handleInstagramSubmit}>
                OK
              </Button>
            </ModalWrapper01>
            <MarginView08/>
          </ModalView>
        </Modal>

        <Modal isVisible={toggleLinkedIn}>
          <ModalView>
            <MarginView08/>
            <ModalWrapper01>
              <Label>Edit LinkedIn username:</Label>
              <MarginView04/>
              <Input
                enablesReturnKeyAutomatically
                multiline
                value={userLinkedIn}
                onChangeText={setUserLinkedIn}
                placeholder="username"
              />
              <MarginView04/>
              <LinkedInWrapper>
                <LabelNormalSocialMedia>
                  Just write the username.
                </LabelNormalSocialMedia>
              </LinkedInWrapper>
              <LinkedInWrapper>
                <LabelNormalSocialMedia>Ex: https://www.linkedin.com/in/</LabelNormalSocialMedia>
                <LabelBoldSocialMedia>username</LabelBoldSocialMedia>
                <LabelNormalSocialMedia>/</LabelNormalSocialMedia>
              </LinkedInWrapper>
              {/* ------- */}
              <MarginView04/>
              <HrLine/>
              <MarginView04/>
              {/* ------- */}
              <MarginView04/>
              <Button type={'submit'} onPress={handleLinkedInSubmit}>
                OK
              </Button>
              <MarginView04/>
              <Button type={'inverted'} onPress={handleToggleLinkedIn}>
                Cancel
              </Button>
            </ModalWrapper01>
            <MarginView08/>
          </ModalView>
        </Modal>

        <Modal isVisible={toggleBio}>

          <ModalView>
            <MarginView08/>
            <ModalWrapper01>
              <Label>Edit Bio:</Label>
              <MarginView04/>
              <Input
                enablesReturnKeyAutomatically
                multiline
                numberOfLines={4}
                value={userBio}
                onChangeText={setUserBio}
                placeholder="Biography"
              />
              {/* ------- */}
              <MarginView04/>
              <HrLine/>
              <MarginView04/>
              {/* ------- */}
              <MarginView04/>
              <Button type={'submit'} onPress={handleBioSubmit}>
                OK
              </Button>
              <MarginView04/>
              <Button type={'inverted'} onPress={handleToggleBio}>
                Cancel
              </Button>
            </ModalWrapper01>
            <MarginView08/>
          </ModalView>
        </Modal>

      </FormScrollView>
    </Container>
  )
}
