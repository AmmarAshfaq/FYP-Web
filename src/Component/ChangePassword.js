import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { forgetPassword } from '../Container/store/action/authAction'
import Alert from 'react-s-alert';
const style = {
  paperWapper: {
    width: '70%',
    margin: '100px auto 0px',
    border: '5px solid darkgray',
    padding: '20px',
    backgroundColor: '#00806d',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 70,
    marginTop: 170
  },
  textStyle: {
    width: '100%',
    color: '#fff'
  },
  button: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    color: '#fff',
    backgroundColor: '#000'
  },
  heading: {
    color: '#212121'
  },
  formControl: {
    minWidth: 120,
    width: '28%',
    float: 'right',
    lineHeight: '2.1875em'
  }
}
class ChangePassword extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      newPassword: ''
    }
  }
  componentWillMount () {
    localStorage.removeItem('token')

    // this.props.changeRoutes('Main')
  }
  // here we have done only data passing error is left 
  submit = () => {
    let { email, newPassword } = this.state
    console.log(email, newPassword)
    let obj = {}
    if (email !== '' && newPassword !== '') {
      obj = {
        email: email,
        newPassword: newPassword
      }
      this.props.getData(obj)
    } else {
      this.showAlertMessage('Data Badly Formated')
    }

    
  }
  showAlertMessage = message => {
    Alert.error(
      message ||
        this.props.errorAuthenticate.error.message ||
        'Something is wrong',
      {
        position: 'bottom-right',
        effect: 'slide',
        timeout: 'none'
      }
    )
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  render () {
    return (
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Change Account Password</h1>

          <TextField
            onChange={event => {
              this.updateValue(event, 'email')
            }}
            value={this.state.email}
            style={style.textStyle}
            type='email'
            label='Email'
          />

          <br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'newPassword')
            }}
            value={this.state.newPassword}
            style={style.textStyle}
            type='password'
            label='New Password'
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
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: obj => {
      dispatch(forgetPassword(obj))
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(ChangePassword)
