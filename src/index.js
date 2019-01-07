import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Practice from './Practice/Practice'
import { initializeFirebase } from './push-notification';
import {askForPermissioToReceiveNotifications} from './push-notification'
// askForPermissioToReceiveNotifications

setTimeout(()=>{
askForPermissioToReceiveNotifications()
},1000)
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

initializeFirebase()