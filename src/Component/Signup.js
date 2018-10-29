import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { signupUser, authError } from '../Container/store/action/authAction'
const style = {
  paperWapper: {
    width: '70%',
    margin: '100px auto 0px',
    border: '5px solid darkgray',
    padding: '10px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom:15
  },
  textStyle: {
    width: '100%',
    color: '#fff'
  },
  button: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    // backgroundColor:'#fff',
    color: '#fff',
    backgroundColor: '#000'
  },
  heading: {
    color: '#212121'
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
      imagePath:null
    }
    console.log(this.props)
  }
  handelFormSubmit () {
    const { email, password, confirmPassword,name,imagePath } = this.state
    if (password === confirmPassword) {
      this.props.signupForm({ email, password,name,imagePath })
    } else {
      this.props.authSignUpError("Password Doesn't match")
    }
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  signIn = () => {
    browserHistory.push('/login')
  }

  render () {
    console.log("image upload",this.state.imagePath)
    return (
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Sign Up</h1>
          <TextField
            onChange={event => {
              this.updateValue(event, 'name')
            }}
            value={this.state.name}
            style={style.textStyle}
            type='name'
            label='Username'
          />
        {/* <label>Select file: <input type="file" name="imagefile" accept="image/jpeg, image/png"/></label>
         <input type="submit" value="upload"/> */}
          <TextField
            onChange={event => {
              this.updateValue(event, 'email')
            }}
            value={this.state.email}
            style={style.textStyle}
            type='email'
            label='Email'
          /><br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={style.textStyle}
            type='password'
            label='Password'
          /><br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'confirmPassword')
            }}
            value={this.state.confirmPassword}
            style={style.textStyle}
            type='password'
            label='Confirm Password'
          /><br />
            <TextField
            onChange={event => {
              this.updateValue(event, 'imagePath')
            }}
            value={this.state.imagePath}
            style={style.textStyle}
            type='file'
            label='Select File'
          /><br />
          <Button onClick={this.signIn} style={style.button}>
            Login
          </Button>
          <Button
            onClick={this.handelFormSubmit.bind(this)}
            style={style.button}
          >
            Register
          </Button>

        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    signupForm: obj => {
      dispatch(signupUser(obj))
    },
    authSignUpError: obj => {
      dispatch(authError(obj))
    }
  }
}
// export default Login;
export default connect(null, mapDispatchToProps)(SignUp)
