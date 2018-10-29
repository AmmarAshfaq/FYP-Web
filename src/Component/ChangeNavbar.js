import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import DrawerOpenClose from '../Container/DrawerOpenClose'
import FarmerHeader from './Farmer/FarmerHeader'
import BuyerHeader from './Buyer/BuyerHeader'
import ExpertHeader from './Expert/ExpertHeader'
import CompanyHeader from './Company/CompanyHeader'
// import MessengerNavBar from '../Container/messengerNavbar'
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
                        : props.componentValue === 'Messenger'
                        ? null
                        :null}
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
