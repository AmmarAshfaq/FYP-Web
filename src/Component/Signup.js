import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { signupUser,authError } from '../Container/store/action/authAction'
import NativeSelect from '@material-ui/core/NativeSelect';
import { selectManu } from '../Container/store/action/action'
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
  paperWapper: {
    width: '70%',
    margin: '100px auto 0px',
    border: '5px solid darkgray',
    padding: '10px',
    backgroundColor: '#00806d',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 15
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
    width:'28%',
    float:'right',
  lineHeight:'2.1875em' , },
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
      userType:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handelFormSubmit () {
    const { email, password, confirmPassword, name, image_url,userType } = this.state
    if (password === confirmPassword) {
      this.props.signupForm({ email, password, name, image_url,userType })
      this.props.itemAdd(userType)
    } else {
      this.props.authSignUpError("Password Doesn't match")
    }
    this.setState({
      email:'',
      password:'',
      confirmPassword:'',
      name:'',
      image_url:null,
      userType:'Admin'
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

  handleChange = (event) =>{
    this.setState({
      image_url: event.target.files[0]
    })
  }
  render () {
    return (
      <div style={styles.paperWapper}>
        <div>
          <h1 style={styles.heading}>Sign Up</h1>
          <div style={styles.textStyle}>
          <TextField
            onChange={event => {
              this.updateValue(event, 'name')
            }}
            value={this.state.name}
            style={{width:'70%',float:'left'}}
            type='name'
            label='Username'
          />
          
          <NativeSelect
            value={this.state.userType}
            onChange={event => {this.updateValue(event,'userType')}}
            name="userType"
            style={styles.formControl}
          >
            <option value="">Select</option>

            <option value="Farmer">Farmer</option>
            <option value="Company">Company</option>
            <option value="Expert">Expert</option>
            <option value="Buyer">Buyer</option>
            
          </NativeSelect>
          </div>
         
          <TextField
            onChange={event => {
              this.updateValue(event, 'email')
            }}
            value={this.state.email}
            style={styles.textStyle}
            type='email'
            label='Email'
          /><br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'password')
            }}
            value={this.state.password}
            style={styles.textStyle}
            type='password'
            label='Password'
          /><br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'confirmPassword')
            }}
            value={this.state.confirmPassword}
            style={styles.textStyle}
            type='password'
            label='Confirm Password'
          /><br />
          <TextField
            onChange={
              this.handleChange
            }
            style={styles.textStyle}
            type='file'
            label='Select File'
          /><br />
          {
            this.props.loader ? 
            <CircularProgress  />
            :null
          }
          <Button onClick={this.signIn} style={styles.button}>
            Login
          </Button>
          <Button
            onClick={this.handelFormSubmit.bind(this)}
            style={styles.button}
          >
            Register
          </Button>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    loader:state.authReducer.authenticated
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
    },
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
