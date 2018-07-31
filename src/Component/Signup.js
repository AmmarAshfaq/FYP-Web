import React from 'react'
import { TextField,Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
const style = {
  paperWapper: {
    width: '70%',
    margin: '100px auto 0px',
    border: '5px solid darkgray',
    padding: '20px',
    backgroundColor: '#3f51b5', 
    color: '#fff',
    textAlign:'center',
    borderRadius: 10

  },
  textStyle: {
    width: '100%',
    color:'#fff'
  },
  button: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    // backgroundColor:'#fff',
    color:'#fff',
    backgroundColor:'#000'
    
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
      password: ''
    }
    console.log(this.props)
  }
  register = () => {
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
    return (
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Sign Up</h1>
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
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={style.textStyle}
            type='password'
            label='Confirm Password'
          /><br />
          <Button  onClick={this.signIn} style={style.button}>
            Login
          </Button>
          <Button  onClick={this.register} style={style.button}>
            Register
          </Button>

        </div>
      </div>
    )
  }
}

// export default Login;
export default SignUp
