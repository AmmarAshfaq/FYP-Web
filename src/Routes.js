import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './Component/Main'
import Login from './Component/Login'
import SignUp from './Component/Signup'
import BuyerMain from './Component/Buyer/BuyerMain'
import ExpertMain from './Component/Expert/ExpertMain'
import FarmerMain from './Component/Farmer/FarmerMain'
import CompanyMain from './Component/Company/CompanyMain'
import AddFertilizer from './Component/Company/AddFertilizer'
import AddMachinery from './Component/Company/AddMachinery'
import AddPesticide from './Component/Company/AddPesticide'
import About from './Component/About'
import Contact from './Component/Contact'
import ProductList from './Container/ProductList'
import ProblemSolution from './Container/ProblemSolution'
import ProductData from './Container/ProductData'
import Messenger from './Container/messenger'
import AuthReducer from './Container/RequireAuth'
import AddItem from './Component/Farmer/AddItem'
import NotificationPanel from './Container/NotificationPanel'
import SpecificCrop from './Container/SpecificCrop';
import AdminMain from './Component/Admin/AdminMain'
export default class Routers extends Component {
  render () {
    return (
      <Router history={browserHistory}>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/buyermain' component={BuyerMain} />
          <Route path='/expertmain' component={ExpertMain} />
          <Route path='/farmermain' component={FarmerMain} />
          <Route path='/companymain' component={CompanyMain} />
          <Route path='/adminmain' component={AdminMain}/>
          {/* <Route path='/menu' component={Menu}/> */}
          <Route path='/addpesticide' component={AddPesticide} />
          <Route path='/addmachinery' component={AddMachinery} />
          <Route path='/addfertilizer' component={AddFertilizer} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/productList' component={ProductList} />
          <Route
            path='/problemSolution'
            component={ProblemSolution}
          />
          <Route
            path='/specificCrop'
            component={SpecificCrop}
          />
          <Route path='/productdata' component={ProductData} />
          <Route path='/messenger' component={Messenger} />
          <Route path='/addedItem' component={AddItem}/>
          <Route path='/notificationpanel' component={NotificationPanel}/>

      </Router>
    )
  }
}
