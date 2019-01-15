import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeNavbar } from '../Container/store/action/authAction'
export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount () {
      const getToken = localStorage.getItem('token')
      if (getToken) {
        if (this.props.userType.user.userType === 'Farmer') {
          this.context.router.push('/farmermain')
          this.props.changeHeader('FarmerHome')
        } else if (this.props.userType.user.userType === 'Company') {
          this.context.router.push('/companymain')
          this.props.changeHeader('CompanyHome')

        } else if (this.props.userType.user.userType === 'Expert') {
          this.context.router.push('/expertmain')
          this.props.changeHeader('ExpertHome')

        } else if (this.props.userType.user.userType === 'Buyer') {
          this.context.router.push('/buyermain')
          this.props.changeHeader('BuyerHome')

        } else if (this.props.userType.user.userType === 'Admin') {
          this.context.router.push('/adminmain')
          this.props.changeHeader('AdminHome')

        } else {
          this.context.router.push('/login')
          this.props.changeHeader('Main')

        }
      } else {
        this.context.router.push('/login')
        this.props.changeHeader('Main')

      }
      // if (!getToken) {
      //   this.context.router.push('/login')
      // }
    }
    // componentWillUpdate (nextProps) {
    //   const getToken = localStorage.getItem('token')
    //   // if (getToken) {
    //   //   if (this.props.userType.user.userType === 'Farmer') {
    //   //     this.context.router.push('/farmermain')
    //   //   }else if(this.props.userType.user.userType === 'Company'){
    //   //     this.context.router.push('/companymain')

    //   //   }else if(this.props.userType.user.userType === 'Expert'){
    //   //     this.context.router.push('/expertmain')

    //   //   }else if(this.props.userType.user.userType === 'Buyer'){
    //   //     this.context.router.push('/buyermain')

    //   //   }else  if (this.props.userType.user.userType === 'Admin'){
    //   //     this.context.router.push('/adminmain')

    //   //   }else{
    //   //   this.context.router.push('/login')

    //   //   }
    //   // }else{
    //   //   this.context.router.push('/login')

    //   // }
    //   if (!getToken) {
    //     this.context.router.push('/login')
    //   }
    // }
    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return {
      authenticated: state.authReducer.authenticated,
      userType: state.authReducer.currentUserData
    }
  }
  function mapDispatchToProps (dispatch) {
    return {
      changeHeader: data => {
        dispatch(changeNavbar(data))
      }
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authentication)
}
