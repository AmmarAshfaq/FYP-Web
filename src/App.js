import React, { Component, Fragment } from 'react'
import ChangeNavbar from './Component/ChangeNavbar'
import Footer from './Container/Footer'
import Routers from './Routes'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Provider } from 'react-redux'
// import {store,persistor} from './Container/store'
import store from './Container/store'
import {PersistGate} from 'redux-persist/es/integration/react'
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
    {/* <PersistGate loading={<CircularProgress />} persistor={persistor}> */}
    <Fragment>
          <ChangeNavbar/>
          <Routers />
          <Footer />
          {/* </PersistGate> */}
          </Fragment>
      </Provider>
    )
  }
}
    {/* <PersistGate loading={null} persistor={persistor}> */}
       {/* </PersistGate> */}
