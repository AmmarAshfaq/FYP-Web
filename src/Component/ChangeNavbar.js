import React, { Fragment,Component } from 'react'
import { connect } from 'react-redux'
import DrawerOpenClose from '../Container/DrawerOpenClose'
import FarmerHeader from './Farmer/FarmerHeader'
import BuyerHeader from './Buyer/BuyerHeader'
import ExpertHeader from './Expert/ExpertHeader'
import CompanyHeader from './Company/CompanyHeader'
import AdminHeader from './Admin/AdminHeader'
 class ChangeNavbar extends Component{

  render(){
  return (
    <Fragment>
      {localStorage.getItem('token')  ?
       
       ( this.props.componentValue === 'FarmerHome' ? (
          <FarmerHeader />
        ) :this.props.componentValue === 'BuyerHome' ? (
          <BuyerHeader />
        ) : this.props.componentValue === 'ExpertHome' ? (
          <ExpertHeader />
        ) : this.props.componentValue === 'CompanyHome' ? (
          <CompanyHeader />
        ) : this.props.componentValue === 'AdminHome' ? (
          <AdminHeader />
        ) : null

       ) : (this.props.componentValue === 'Main' ? (
        <DrawerOpenClose />
      ) : null)
      }
    </Fragment>
  )
}
}

function mapStateToProps (state) {
  return {
    componentValue: state.reducer.componentUpdate
  }
}
export default connect(
  mapStateToProps,
  null
)(ChangeNavbar)
