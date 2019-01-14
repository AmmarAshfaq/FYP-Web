import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './Component/Main'
import Login from './Component/Login'
import ChangePassword from './Component/ChangePassword'

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
import SpecificCrop from './Container/SpecificCrop'
import AdminMain from './Component/Admin/AdminMain'
import AdminBuyer from './Component/Admin/AdminBuyer'
import AdminCompany from './Component/Admin/AdminCompany'
import AdminExpert from './Component/Admin/AdminExpert'
import AdminFarmer from './Component/Admin/AdminFarmer'
import CompanyResponse from './Component/Company/CompanyResponse'
import ResetPassword from './Component/PasswordReset'
export default class Routers extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/changePassword' component={ChangePassword} />
        <Route path='/auth/reset_password' component={ResetPassword} />


        <Route path='/buyermain' component={AuthReducer(BuyerMain)} />
        <Route path='/expertmain' component={AuthReducer(ExpertMain)} />
        <Route path='/farmermain' component={AuthReducer(FarmerMain)} />
        <Route path='/companymain' component={AuthReducer(CompanyMain)} />
        <Route path='/adminmain' component={AuthReducer(AdminMain)} />
        <Route
          path='/adminmain/company'
          component={AuthReducer(AdminCompany)}
        />
        <Route path='/adminmain/expert' component={AuthReducer(AdminExpert)} />
        <Route path='/adminmain/buyer' component={AuthReducer(AdminBuyer)} />
        <Route path='/adminmain/farmer' component={AuthReducer(AdminFarmer)} />

        <Route path='/addpesticide' component={AuthReducer(AddPesticide)} />
        <Route path='/addmachinery' component={AuthReducer(AddMachinery)} />
        <Route path='/addfertilizer' component={AuthReducer(AddFertilizer)} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/productList' component={AuthReducer(ProductList)} />
        <Route
          path='/problemSolution'
          component={AuthReducer(ProblemSolution)}
        />
        <Route path='/specificCrop' component={AuthReducer(SpecificCrop)} />
        <Route path='/productdata' component={AuthReducer(ProductData)} />
        <Route path='/messenger' component={AuthReducer(Messenger)} />
        <Route path='/addedItem' component={AuthReducer(AddItem)} />
        <Route path='/allResponse' component={AuthReducer(CompanyResponse)}/>
        <Route
          path='/notificationpanel'
          component={AuthReducer(NotificationPanel)}
        />
      </Router>
    )
  }
}
