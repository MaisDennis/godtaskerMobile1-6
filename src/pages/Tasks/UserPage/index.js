import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DropShadow from "react-native-drop-shadow";
// -----------------------------------------------------------------------------
import TaskUser from '~/components/TasksUser';
import HeaderView from '~/components/HeaderView'
// import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';
import logo from '~/assets/detective/detective_remake.png'
import api from '~/services/api';
import SearchBar from '~/components/Searchbar'
import {
  AddIcon, AddIcon02,
  Container,
  Floater, FloaterButton,
  List,
  Header, HeaderImage, HeaderTabView, HeaderTouchable,
  SpaceView, SearchBarTextInput,
  Title, TitleNumber,
  UpperTabView, UpperTabText, UpperTabSelectedView, UpperTabSelectedText, UpperTabSelectedBarView
} from './styles';
// -----------------------------------------------------------------------------
export default function UserPage({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [listState, setListState] = useState(1);
  const [searchInputState, setSearchInputState] = useState('');
  const [taskConditionIndex, setTaskConditionIndex] = useState();
  const user_id = useSelector(state => state.user.profile.id);
  const update_tasks = useSelector(state => state.task.tasks);

  const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#666',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
  })

  useEffect(() => {
    loadTasks('', user_id, '');
  }, [ update_tasks ]);

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  const todayDate = formattedDate(new Date())

  async function loadTasks(workerNameFilter, userID, nameFilter) {
    setSearchInputState(nameFilter)
    setListState(1);
    let response = await api.get(`tasks/user/unfinished`, {
      params: { workerNameFilter, userID, nameFilter }
    })
    setTasks(response.data);
    setTaskConditionIndex(1);
  }

  async function loadTasksRefresh(workerNameFilter, userID) {
    setSearchInputState('')
    let nameFilter = '';
    setListState(1);
    setTasks(null);
    let response = await api.get(`tasks/user/unfinished`, {
      params: { workerNameFilter, userID, nameFilter }
    })
    setTasks(response.data);
    setTaskConditionIndex(1);
  }

  async function loadFinished(workerNameFilter, userID, nameFilter) {
    setSearchInputState(nameFilter)
    setListState(2);
    let response = await api.get(`tasks/user/finished`, {
      params: { workerNameFilter, userID, nameFilter }
    })
    setTasks(response.data);
    setTaskConditionIndex(2);
  }

  async function loadCanceled(workerNameFilter, userID, nameFilter) {
    setSearchInputState(nameFilter)
    setListState(3);
    let response = await api.get(`tasks/user/canceled`, {
      params: { workerNameFilter, userID, nameFilter }
    })
    setTasks(response.data);
    setTaskConditionIndex(3);
  }

  function handleCreateTaskPage() {
    navigation.navigate('TaskCreate')
  }

  // -----------------------------------------------------------------------------
  return (
    <Container>

      <Floater>
        <DropShadow style={styles.shadowProp}>
          <FloaterButton onPress={handleCreateTaskPage}>
            <AddIcon02 name='plus' size={21}/>
          </FloaterButton>
        </DropShadow>
      </Floater>


      <Header>
        <SpaceView>
          <HeaderImage
            source={logo}
          />
        </SpaceView>
        { listState === 1
          ? (
            <SearchBar
              onChangeText={(input) => loadTasks('', user_id, input)}
              returnKeyType={'search'}
              value={searchInputState}
            />
          )
          : null
        }
        { listState === 2
          ? (
            <SearchBar
              onChangeText={(input) => loadFinished('', user_id, input)}
              returnKeyType={'search'}
              value={searchInputState}
            />
          )
          : null
        }
                { listState === 3
          ? (
            <SearchBar
              onChangeText={(input) => loadCanceled('', user_id, input)}
              returnKeyType={'search'}
              value={searchInputState}
            />
          )
          : null
        }

        {/* <SearchBarTextInput
          placeholder='Search'
        /> */}
        <HeaderTouchable onPress={() => loadTasksRefresh('', user_id)}>
          <AddIcon name='refresh-cw' size={20}/>
        </HeaderTouchable>
      </Header>

      <HeaderTabView>
        { listState === 1
          ? (
            <UpperTabSelectedView>
              <UpperTabSelectedText>open</UpperTabSelectedText>
              <UpperTabSelectedBarView/>
            </UpperTabSelectedView>
          )
          : (
            <UpperTabView onPress={() => loadTasks('', user_id, '')}>
              <UpperTabText>open</UpperTabText>
            </UpperTabView>
          )
        }
        { listState === 2
          ? (
            <UpperTabSelectedView>
              <UpperTabSelectedText>finished</UpperTabSelectedText>
              <UpperTabSelectedBarView/>
            </UpperTabSelectedView>
          )
          : (
            <UpperTabView onPress={() => loadFinished('', user_id, '')}>
              <UpperTabText>finished</UpperTabText>
            </UpperTabView>
          )
        }
        { listState === 3
          ? (
            <UpperTabSelectedView>
              <UpperTabSelectedText>canceled</UpperTabSelectedText>
              <UpperTabSelectedBarView/>
            </UpperTabSelectedView>
          )
          : (
            <UpperTabView onPress={() => loadCanceled('', user_id, '')}>
              <UpperTabText>canceled</UpperTabText>
            </UpperTabView>
          )
        }
      </HeaderTabView>
      { tasks == ''
        ? (
          <Title>No tasks with this status</Title>
        )
        : (
          <List
            data={tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <>
                {/* <TitleNumber>{index+1}</TitleNumber> */}
                <TaskUser
                  key={item.id}
                  data={item}
                  navigation={navigation}
                  taskConditionIndex={taskConditionIndex}
                />
              </>
            )}
          />
        )
      }
    </Container>
  );
}

