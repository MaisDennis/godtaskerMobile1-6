import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { Text, Image } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Whatsapp from '~/assets/whatsapp.png'
// -----------------------------------------------------------------------------
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Messages from './pages/Messages';
import Confirm from './pages/Confirm';
import ContactEdit from './pages/Contacts/ContactEditPage';
import ContactTasks from './pages/Contacts/ContactTasksPage';
import TaskEdit from './pages/Tasks/TaskEditPage';
import MessagesConversationPage from './pages/Messages/MessagesConversationPage/index';

import TabRoutes from '~/components/TabRoutes';
import HeaderView from './components/HeaderView'
// -----------------------------------------------------------------------------
const Stack = createStackNavigator();
// -----------------------------------------------------------------------------
export default function App() {
  const signed = useSelector(state => state.signed);

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  const todayDate = formattedDate(new Date())
  // -----------------------------------------------------------------------------

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signed === true ? 'TabRoutes' : 'SignIn'}
        screenOptions={{
          headerStyle: { backgroundColor: '#222' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: "center",
          ...TransitionPresets.ModalTransition,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            title: 'Entrar',
            headerShown: false,
          }}
        />
        {
          Platform.OS === 'ios'
            ? <Stack.Screen
                name="Home"
                component={TabRoutes}
                // options={{
                //   headerTitle: (props => (
                //   <HeaderView/>
                //   )),
                //   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                //   headerTintColor: '#fff',
                //   // headerBackTitleVisible: false,
                //   headerStyle: {
                //     backgroundColor: '#222',
                //     height: 90,
                //   },
                // }}
              />
            : <Stack.Screen
                name="Home"
                component={TabRoutes}
                // options={{
                //   headerTitle: (props => (
                //   <HeaderView/>
                //   )),
                //   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                //   headerTintColor: '#fff',
                //   // headerBackTitleVisible: false,
                //   headerStyle: {
                //     backgroundColor: '#222',
                //     height: 80,
                //   },
                // }}
              />
            }
            <Stack.Screen
              name="TaskEdit"
              component={TaskEdit}
              options={{
                title: 'Editar a tarefa',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                },
                headerStyle: {
                  backgroundColor: '#222',
                  height: 90,
                },
              }}
            />
            <Stack.Screen
              name="Confirm"
              component={Confirm}
              options={{
                title: 'Finalizar a tarefa',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                },
                headerStyle: {
                  backgroundColor: '#222',
                  height: 90,
                },
              }}
            />
            <Stack.Screen
              name="ContactEdit"
              component={ContactEdit}
              options={{
                title: 'Editar o contato',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                },
                headerStyle: {
                  backgroundColor: '#222',
                  height: 90,
                },
              }}
            />
            <Stack.Screen
              name="ContactTasks"
              component={ContactTasks}
              options={{
                title: 'Tarefas do contato',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                },
                headerStyle: {
                  backgroundColor: '#222',
                  height: 90,
                },
              }}
            />
            <Stack.Screen
              name="MessagesConversationPage"
              component={MessagesConversationPage}
              options={{
                title: 'Conversa',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                },
                headerStyle: {
                  backgroundColor: '#222',
                  height: 90,
                },
              }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
