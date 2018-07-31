import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import DrawerOpenClose from '../Container/DrawerOpenClose'
import FarmerHeader from './Farmer/FarmerHeader'
import BuyerHeader from './Buyer/BuyerHeader'
import ExpertHeader from './Expert/ExpertHeader'
import CompanyHeader from './Company/CompanyHeader'
const ChangeNavbar = props => {
  // console.log(props.componentValue)
  return (
    <Fragment>
      {props.componentValue === 'Main'
        ? <DrawerOpenClose />
        : props.componentValue === 'FarmerHome'
            ? <FarmerHeader />
            : props.componentValue === 'BuyerHome'
                ? <BuyerHeader />
                : props.componentValue === 'ExpertHome'
                    ? <ExpertHeader />
                    : props.componentValue === 'CompanyHome'
                        ? <CompanyHeader />
                        : null}
      {/* {props.componentValue === 'Main' ? <Footer /> : null} */}
    </Fragment>
  )
}

function mapStateToProps (state) {
  return {
    componentValue: state.reducer.componentUpdate
  }
}
export default connect(mapStateToProps, null)(ChangeNavbar)
