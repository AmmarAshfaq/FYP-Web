import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { passwordReset } from '../Container/store/action/authAction'
import Background from '../images/theme.png'

import Alert from 'react-s-alert'
const style = {
  paperWapper: {
    width: '30%',
    margin: '100px auto 0px',
    border: '3px solid #E8E8E8',
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 70,
    marginTop: 160,
  },
  textStyle: {
    width: '80%',
    color: '#fff',
    marginBottom: 8,
    boxShadow: 'none'
  },
  button: {
    width: '80%',
    marginTop: '10px',
    marginBottom: '10px',
    marginRight: '10px',
    marginLeft: '10px',
    color: '#fff',
    backgroundColor: '#3c806d',
    borderRadius: 10
  },
  heading: {
    color: '#fff',
    backgroundColor: '#3c806d',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 50,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 32
  }
  ,
  root: {
    backgroundImage:`url(${Background})`,
    padding: 50,

  }
}
class ChangePassword extends Component {
  constructor () {
    super()
    this.state = {
      newPassword: '',
      verifyPassword: ''
    }
  }
 
  submit = () => {
    let { newPassword, verifyPassword } = this.state
    console.log(newPassword, verifyPassword)
    let obj = {}
    var token = document.location.href.split('token=')[1];
    console.log(token)
    if (verifyPassword !== '' && newPassword !== '') {

      obj = {
        newPassword: newPassword,
        verifyPassword: verifyPassword,
        token:token
      }
      this.props.getData(obj)
    console.log(obj)
    } else {
      this.showAlertMessage('Data Badly Formated')
    }
  }
  showAlertMessage = message => {
    Alert.error(message || 'Something is wrong', {
      position: 'bottom-right',
      effect: 'slide',
      timeout: 'none'
    })
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  render () {
    return (
      <div style={style.root}>

      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Reset Password Form</h1>

          <TextField
            onChange={event => {
              this.updateValue(event, 'newPassword')
            }}
            value={this.state.newPassword}
            style={style.textStyle}
            type='password'
            placeholder='New Password'
          />

          <br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'verifyPassword')
            }}
            value={this.state.verifyPassword}
            style={style.textStyle}
            type='password'
            placeholder='Confirm Password'
          />
          <br />
          <br />
          {/* {this.props.loader ? (
        <Loader type='Oval' color='#000' height={50} width={50} />
      ) : null} */}

          <Button onClick={this.submit.bind(this)} style={style.button}>
            Submit
          </Button>
        </div>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: obj => {
      dispatch(passwordReset(obj))
    }
  }
}
function mapStateToProps (state) {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword)
