import React, { Component, Fragment } from 'react'
import ChangeNavbar from './Component/ChangeNavbar'
import Footer from './Container/Footer'
import Routers from './Routes'
import { Provider } from 'react-redux'
// import {store,persistor} from './Container/store'
import store from './Container/store'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import Alert from 'react-s-alert'
export default class App extends Component {
  render () {
    return (
      
      <Provider store={store}>
        <Fragment>
          <ChangeNavbar />
          <Routers />
          <Footer />
          <span>{this.props.children}</span>
          <Alert stack={{ limit: 3 }} />
        </Fragment>
      </Provider>
    )
  }
}

