import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  
  class Authentication extends Component {

    constructor(){
      super()
    }
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount () {
      const getToken = localStorage.getItem('token')
      
      if (!getToken) {
        this.context.router.push('/login')
      }
    }
    componentWillUpdate (nextProps) {
      const getToken = localStorage.getItem('token')
      
      if (!getToken) {
        this.context.router.push('/login')
      }
    }
    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return { authenticated: state.authReducer.authenticated }
  }
  return connect(mapStateToProps)(Authentication)
}
