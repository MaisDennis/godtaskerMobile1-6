import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator, DarkTheme as TabRoutesDarkTheme } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import User from '~/pages/Tasks/UserPage';
import Tasks from '~/pages/Tasks/TasksPage';
import Messages from '~/pages/Messages/MessagesPage';
import Contacts from '~/pages/Contacts/ContactsPage';
import Dashboard from '~/pages/Dashboard';
// import { DarkTheme } from '@react-navigation/native';
// -----------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

export default function TabRoutes({ navigation }) {
  const signed = useSelector(state => state.auth.signed);

  if (!signed) {
    navigation.navigate('SignIn');
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Tab.Navigator
        // theme={TabRoutesDarkTheme}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Worker') {
              iconName = 'briefcase';
            } else if (route.name === 'User') {
              iconName = 'check-circle';
            } else if (route.name === 'Messages') {
              iconName = 'message-circle';
            } else if (route.name === 'Dashboard') {
              iconName = 'bar-chart';
            } else if (route.name === 'Contacts') {
              iconName = 'users';
              // iconName = focused ? 'settings' : 'settings';
            }
            return <Icon name={iconName} size={23} color={color} />;
          },
        })}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          // activeBackgroundColor: '#fff',
          // inactiveBackgroundColor: '#fff',
          // activeTintColor: '#18A0FB',
          // inactiveTintColor: '#000',
        }}
      >
        <Tab.Screen
          name="Worker"
          component={Tasks}
          options={{ tabBarLabel: 'Received' }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{ tabBarLabel: 'Sent' }}
        />

        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ tabBarLabel: 'Dashboard' }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{ tabBarLabel: 'Search' }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{ tabBarLabel: 'Chat' }}
        />
      </Tab.Navigator>
    </>
  );
}
