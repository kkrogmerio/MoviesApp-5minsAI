/**
 * @format
 */
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid,Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  async function backgroundMessageHandler(remoteMessage) {
    console.log('Message handled in the background!', remoteMessage);
    // Process the message as required.
  }  
  messaging().setBackgroundMessageHandler(backgroundMessageHandler);
  Platform.OS=='android'&&PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  requestUserPermission();
AppRegistry.registerComponent(appName, () => App);
