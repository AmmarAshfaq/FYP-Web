import React, { Component, Fragment } from 'react'
import ChangeNavbar from './Component/ChangeNavbar'
import Footer from './Container/Footer'
import Routers from './Routes'
import { Provider } from 'react-redux'
import store from './Container/store'
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Fragment>
          {/* <DrawerOpenClose /> */}
          <ChangeNavbar/>
          <Routers />
          <Footer />
        </Fragment>
      </Provider>
    )
  }
}
