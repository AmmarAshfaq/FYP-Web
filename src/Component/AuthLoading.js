import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Loader from 'react-loader-spinner'

export default class AuthLoading extends Component {
  constructor () {
    super()
    this.loadApp()
  }

  loadApp = () => {
    const userToken = localStorage.getItem('token')
    console.log(userToken)
    //    const select = await AsyncStorage.getItem('MainSelect');
    // console.log(select)
    //    if(select === 'Farmer'){

    //     this.props.navigation.navigate(userToken?'App':'Auth',{
    // AddProblem:AddProblem,
    //         BuyerMsg:BuyerMsg,
    //         CompanyMsg:CompanyMsg,
    //         CropAdd:CropAdd,
    //         ExpertMsg:ExpertMsg,
    //         PaymentTerm:PaymentTerm

    //     })

    //    }else{
    //      this.props.navigation.navigate('Auth')
    //    }
  }
  render () {
    return (
      <div>
        <Loader type='Oval' color='#000' height={50} width={50} />
      </div>
    )
  }
}
