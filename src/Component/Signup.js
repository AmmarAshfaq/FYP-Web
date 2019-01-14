import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { signupUser, authError } from '../Container/store/action/authAction'
import NativeSelect from '@material-ui/core/NativeSelect'
import { selectManu } from '../Container/store/action/action'
import Background from '../images/theme.png'

import CircularProgress from '@material-ui/core/CircularProgress'
import './login.css'
const styles = {
  paperWapper: {
    width: '30%',
    margin: '100px auto 0px',
    border: '3px solid #E8E8E8',
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 15
  },
  textStyle: {
    width: '80%',
    color: '#fff',
    marginBottom: 8,
    background: 0,
    border:0

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
  root: {
    backgroundImage:`url(${Background})`,
    padding: 50,

  },
  heading: {
    color: '#fff',
    backgroundColor: '#3c806d',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 30,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 32
  },
  formControl: {
    // minWidth: 120,
    // font:'inherit',
    // fontFamily: 'Roboto', sansSerif :!important
    width: '28%',
    marginLeft:7
    // float: 'right',
    // lineHeight: '2.1875em',
  }
}

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      image_url: null,
      userType: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handelFormSubmit () {
    const {
      email,
      password,
      confirmPassword,
      name,
      image_url,
      userType
    } = this.state
    if (password === confirmPassword) {
      this.props.signupForm({ email, password, name, image_url, userType })
      this.props.itemAdd(userType)
    } else {
      this.props.authSignUpError("Password Doesn't match")
    }
    this.setState({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      image_url: null,
      userType: 'Admin'
    })
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  signIn = () => {
    browserHistory.push('/login')
  }

  handleChange = event => {
    this.setState({
      image_url: event.target.files[0]
    })
  }
  render () {
    return (
      <div style={styles.root}>
      <div style={styles.paperWapper}>
      {/* <h1 className="heading">Hello</h1> */}
        <div>
          <h1 
          style={styles.heading}>Sign Up</h1>
          <div style={{width:'100%'}}>
            <TextField
              onChange={event => {
                this.updateValue(event, 'name')
              }}
              value={this.state.name}
              style={{
                // width:'70%',
                marginTop:15
              }}
              type='name'
              placeholder='Username'
            />

            <NativeSelect
              value={this.state.userType}
              onChange={event => {
                this.updateValue(event, 'userType')
              }}
              name='userType'
              style={styles.formControl}
            >
              <option value=''>Select</option>

              <option value='Farmer'>Farmer</option>
              <option value='Company'>Company</option>
              <option value='Expert'>Expert</option>
              <option value='Buyer'>Buyer</option>
            </NativeSelect>
          </div>

          <TextField
            onChange={event => {
              this.updateValue(event, 'email')
            }}
            value={this.state.email}
            style={styles.textStyle}
            type='email'
            placeholder='Email'
          />
          <br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={styles.textStyle}
            type='password'
            placeholder='Password'
          />
          <br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'confirmPassword')
            }}
            value={this.state.confirmPassword}
            style={styles.textStyle}
            type='password'
            placeholder='Confirm Password'
          />
          <br />
          <TextField
            onChange={this.handleChange}
            style={styles.textStyle}
            type='file'
            label='Select File'
          />
          <br />
          {this.props.loader ? <CircularProgress /> : null}
          {/* <Button onClick={this.signIn} style={styles.button}>
            Login
          </Button> */}
          <Button
            onClick={this.handelFormSubmit.bind(this)}
            style={styles.button}
          >
            Register
          </Button>
          <br/>
          <br/>
          <br/>
          <p
            style={{
              color: 'silver',
              lineHeight: '0.2em'
            }}
          >
            Already have an account?
          </p>
          <h3
            style={{ color: '#3c806d', cursor: 'pointer' }}
            onClick={this.signIn}
          >
            LOG IN NOW
          </h3>
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loader: state.authReducer.authenticated
  }
}
function mapDispatchToProps (dispatch) {
  return {
    signupForm: obj => {
      dispatch(signupUser(obj))
    },
    authSignUpError: obj => {
      dispatch(authError(obj))
    },
    itemAdd: inputData => {
      dispatch(selectManu(inputData))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
