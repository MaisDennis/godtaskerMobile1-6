import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import messaging from '@react-native-firebase/messaging';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance} from "react-native-push-notification";
// -----------------------------------------------------------------------------
import App from './App';
// -----------------------------------------------------------------------------
export default function Index() {

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    // PushNotification.localNotification({
    //   channelId: 'godtaskerChannel01',
    //   // title: remoteMessage.data.title,
    //   title: 'backgroundHandler',
    //   message: remoteMessage.data.message,
    //   showWhen: true,
    // })
  });

  AppRegistry.registerComponent('app', () => App);

  // Must be outside of any component LifeCycle (such as `componentDidMount`).
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log(" PN TOKEN:", token);
    },
    // (required) Called when a remote is received or opened, or local notification is opened
    // onNotification: function (notification) {
    //   console.log("PN NOTIFICATION:", notification);
    //   // process the notification

    //   // (required) Called when a remote is received or opened, or local notification is opened
    //   // notification.finish(PushNotificationIOS.FetchResult.NoData);
    // },
  });

  PushNotification.createChannel(
    {
      channelId: "godtaskerChannel01", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

  const ReduxApp = ({ isHeadless }) => {
    if (isHeadless) {
      console.log('App launched by iOS in background, ignore it');
      return null
    }
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1B2432',
      accent: 'yellow',
    },
  };

  // -----------------------------------------------------------------------------
  return (
    <>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          {/* <PaperProvider theme={theme}> */}
            <StatusBar
              // barStyle="light-content"
              // backgroundColor="#000"
              barStyle="default"
            />
            <App/>
          {/* </PaperProvider> */}
        </PersistGate>
      </StoreProvider>
    </>
  );
}
