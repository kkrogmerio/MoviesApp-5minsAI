import {FC,useEffect} from 'react'
import AppNavigator from './src/config/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import messaging from '@react-native-firebase/messaging';

const App:FC = () => {
  useEffect(() => {



    const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
      console.log('Notification received:', remoteMessage);
      // Handle the notification here
    });

    messaging().onNotificationOpenedApp((remoteMessage: any) => {
      console.log('Notification opened by app:', remoteMessage);
      // Handle the notification here
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage: any) => {
        if (remoteMessage) {
          console.log('Notification caused the app to open:', remoteMessage);
          // Handle the notification here
        }
      });

    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
    <AppNavigator/>
    </Provider>
  )
}

export default App

