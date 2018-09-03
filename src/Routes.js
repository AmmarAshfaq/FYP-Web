import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './Component/Main'
import Login from './Component/Login'
import SignUp from './Component/Signup'
import BuyerMain from './Component/Buyer/BuyerMain'
import ExpertMain from './Component/Expert/ExpertMain'
import FarmerMain from './Component/Farmer/FarmerMain'
import CompanyMain from './Component/Company/CompanyMain'
import Menu from './Component/Menu'
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


export default class Routers extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/buyermain' component={AuthReducer(BuyerMain)} />
        <Route path='/expertmain' component={AuthReducer(ExpertMain)} />
        <Route path='/farmermain' component={AuthReducer(FarmerMain)} />
        <Route path='/companymain' component={AuthReducer(CompanyMain)} />
        {/* <Route path='/menu' component={Menu}/> */}
        <Route path='/addpesticide' component={AuthReducer(AddPesticide)}/>
        <Route path='/addmachinery' component={AuthReducer(AddMachinery)}/>
        <Route path='/addfertilizer' component={AuthReducer(AddFertilizer)}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/productList' component={AuthReducer(ProductList)}/>
        <Route path='/problemSolution' component={AuthReducer(ProblemSolution)}/>
        <Route path='/productdata' component={AuthReducer(ProductData)}/>
        <Route path='/messenger' component={AuthReducer(Messenger)}/>
        
        

      </Router>
    )
  }
}
