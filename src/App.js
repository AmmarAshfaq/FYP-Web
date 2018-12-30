import React, { Component, Fragment } from 'react'
import ChangeNavbar from './Component/ChangeNavbar'
import Footer from './Container/Footer'
import Routers from './Routes'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Provider } from 'react-redux'
// import {store,persistor} from './Container/store'
import store from './Container/store'
import { PersistGate } from 'redux-persist/es/integration/react'
import { askForPermissioToReceiveNotifications } from './push-notification'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import Alert from 'react-s-alert'
export default class App extends Component {
  // componentWillMount () {
  //   fetch('https://fcm.googleapis.com/fcm/send', {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'key=AAAA8_iEm34:APA91bHRLo2cXOWOC8oFUOSQE9HVjd8QxLdsSSPSmrqIlMBk8NLZJ4rkGqUQJO7t_92Fli1_7Q-EppiC0x3uI0Z_4kc0ojc4DPJkSdxzpO0XH1qLIbjpJ2G8XWU7QVWStRGTIEV72l-j',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       notification: {
  //         title: 'Firebase',
  //         body: 'Firebase is awesome',
  //         click_action: 'http://localhost:3000/',
  //         icon: 'http://url-to-an-icon/icon.png'
  //       },
  //       to:
  //         'dve_HSqLKP4:APA91bEbqluJTQQuo_byyoqeQB4eymnKcYb9fguWi3OeoVZXu2yXdamPJXWFCyObh_Rf8woxYJ50DMoNvpB_C6cXP6X5KwuRgJmPieZg5T582-qMzTT5O02D6nQvZQf04MzUzFgTaNxX'
  //     })
  //   })
  // }
  render () {
    return (
      // <div>
      //   <button onClick={askForPermissioToReceiveNotifications}>
      //     Clique aqui para receber notificações
      //   </button>
      // </div>
      <Provider store={store}>
        {/* <PersistGate loading={<CircularProgress />} persistor={persistor}> */}
        <Fragment>
          <ChangeNavbar />
          <Routers />
          <Footer />
          {/* </PersistGate> */}
          <span>{this.props.children}</span>
          <Alert stack={{ limit: 3 }} />
        </Fragment>
      </Provider>
    )
  }
}
{
  /* <PersistGate loading={null} persistor={persistor}> */
}
{
  /* </PersistGate> */
}
