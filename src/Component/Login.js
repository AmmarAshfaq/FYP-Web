import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {
  signinUser,
  authError,
  loaderOffProcess
} from '../Container/store/action/authAction'
import Alert from 'react-s-alert'
import Loader from 'react-loader-spinner'
import Background from '../images/theme.png'


const style = {
  paperWapper: {
    width: '30%',
    margin: '100px auto 0px',
    border: '3px solid #E8E8E8',
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 15,
   
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
  },
  root: {
    backgroundImage:`url(${Background})`,
    padding: 50,

  },
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  register = () => {
    browserHistory.push('/signup')
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
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

  changeRoute = () => {
    browserHistory.push('/changePassword')
  }
  signIn = authenticate => {
    const { email, password } = this.state
    if (email.trim() !== '' && password.trim() !== '') {
      this.props.siginUserForm({ email, password, authenticate })
    } else {
      this.showAlertMessage('Data Badly Formated')
      this.props.loaderOff()
    }
  }

  render () {
    return (
      <div style={style.root}>
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Sign In</h1>

          <TextField
            onChange={event => {
              this.updateValue(event, 'email')
            }}
            value={this.state.email}
            style={style.textStyle}
            type='email'
            // label='Email'
            placeholder='Email'
          />

          <br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={style.textStyle}
            type='password'
            // label='Password'
            placeholder='Password'
          />
          <br />

          <p
            style={{
              fontSize: 16,
              color: 'silver',
              float: 'right',
              marginRight: 35
            }}
          >
            Forgot{' '}
            <span
              style={{ color: '#3c806d', cursor: 'pointer' }}
              onClick={this.changeRoute.bind(this)}
            >
              Password?
            </span>{' '}
          </p>
          {/* </span> */}
          <br />
          <br />
          {this.props.loader ? (
            <Loader type='Oval' color='#000' height={50} width={50} />
          ) : null}

          <Button
            onClick={this.signIn.bind(this, 'companymain')}
            style={style.button}
          >
            SIGN IN
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />

          <p
            style={{
              color: 'silver',
              lineHeight: '0.2em'
            }}
          >
            Don't have an account?
          </p>
          <h3
            style={{ color: '#3c806d', cursor: 'pointer' }}
            onClick={this.register}
          >
            SIGN UP NOW
          </h3>
        </div>
      </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    ComponentName: state.reducer.item,
    loader: state.authReducer.authenticated,
    errorAuthenticate: state.authReducer.error
  }
}
function mapDispatchToProps (dispatch) {
  return {
    siginUserForm: obj => dispatch(signinUser(obj)),
    errorLogin: err => dispatch(authError(err)),
    loaderOff: () => dispatch(loaderOffProcess())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
