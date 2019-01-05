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
import CircularProgress from '@material-ui/core/CircularProgress'
import NativeSelect from '@material-ui/core/NativeSelect'
import Loader from 'react-loader-spinner'

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

  changeRoute = ()=>{
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
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Log In</h1>

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
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={style.textStyle}
            type='password'
            label='Password'
          />
          <br />
          <br />
          {this.props.loader ? (
            <Loader type='Oval' color='#000' height={50} width={50} />
          ) : null}

          <Button
            onClick={this.signIn.bind(this, 'companymain')}
            style={style.button}
          >
            LOGIN
          </Button>
          <Button
            onClick={this.changeRoute.bind(this)}
            style={style.button}
          >
          Forget Password
          </Button>

          <Button onClick={this.register} style={style.button}>
            Register
          </Button>
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
