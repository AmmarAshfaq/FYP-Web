import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { signinUser, authError } from '../Container/store/action/authAction'
import CircularProgress from '@material-ui/core/CircularProgress'
import NativeSelect from '@material-ui/core/NativeSelect'

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

  signIn = authenticate => {
    const { email, password } = this.state

    this.props.siginUserForm({ email, password, authenticate })
  
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
          {this.props.loader ? <CircularProgress /> : null}

          <Button
            onClick={this.signIn.bind(this, 'companymain')}
            style={style.button}
          >
            LOGIN
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
    loader: state.authReducer.authenticated
  }
}
function mapDispatchToProps (dispatch) {
  return {
    
    siginUserForm: obj => dispatch(signinUser(obj)),
    errorLogin: err => dispatch(authError(err))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
