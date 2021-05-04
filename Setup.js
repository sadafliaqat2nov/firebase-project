import * as React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyACqmo088rzuH_s6WADGP3Zo_5KGutKspI',
  authDomain: 'fcm-project-e2fee.firebaseapp.com',
  databaseURL: 'https://fcm-project-e2fee.firebaseapp.com',
  projectId: 'fcm-project-e2fee',
  storageBucket: 'fcm-project-e2fee.appspot.com',
  messagingSenderId: '142824014239',
  appId: '1:142824014239:web:4c6c6674b62d9b4f26bdaa',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const methodForCloudMessaging = async () => {
  const token = await messaging().getToken();
  // alert(token);
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export {firebase, Auth, messaging};

function Setup() {
  React.useEffect(async () => {
    await methodForCloudMessaging();

    // It will trigger when app was in background
    messaging().onNotificationOpenedApp(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });

    // It will trigger when app will opened after trigger background notification
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });

    // It will trigger when app was in quit mode
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          alert(JSON.stringify(remoteMessage.notification.body));
        }
      })
      .catch(err => {
        alert(err);
      });

    // If App is in foreground mode
    messaging().onMessage(remoteMessage => {
      alert(JSON.stringify(remoteMessage.notification.body));
    });
  }, []);

  return <App />;
}

export default Setup;
