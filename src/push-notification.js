import firebase from 'firebase';
import store from './Container/store'
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "685967859230"
  });
  // this service worker will basically import the script needed to show the notification when you app is in the background
  /* Start */
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
    /* End */
}

// Make request and return the user token
/* Start */
export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      // console.log('token do usuário:', token);
      store.dispatch({
        type:'RECEIVE_TOKEN',
        payload: token
      })
      return token;
    } catch (error) {
      console.error(error);
    }
  }
  /* End */