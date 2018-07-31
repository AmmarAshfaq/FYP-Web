import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {changeNavbar} from '../Container/store/action/action'
const style = {
  paperWapper: {
    width: '70%',
    margin: '100px auto 0px',
    border: '5px solid darkgray',
    padding: '20px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10
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

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    // console.log(this.props)
  }

  register = () => {
    browserHistory.push('/signup')
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }

  signIn = itemList => {
    console.log(itemList)
    browserHistory.push('/menu')
    this.props.componentList(itemList)
  }

  render () {
    console.log(this.props.ComponentName)
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
          {this.props.ComponentName === 'Farmer'
            ? <Button
              onClick={this.signIn.bind(
                  this,
                  this.props.ComponentName + 'Home'
                )}
              style={style.button}
              >
                LOGIN
              </Button>
            : this.props.ComponentName === 'Company'
                ? <Button
                  onClick={this.signIn.bind(
                      this,
                      this.props.ComponentName + 'Home'
                    )}
                  style={style.button}
                  >
                    LOGIN
                  </Button>
                : this.props.ComponentName === 'Expert'
                    ? <Button
                      onClick={this.signIn.bind(
                          this,
                          this.props.ComponentName + 'Home'
                        )}
                      style={style.button}
                      >
                        LOGIN
                      </Button>
                    : this.props.ComponentName === 'Buyer'
                        ? <Button
                          onClick={this.signIn.bind(
                              this,
                              this.props.ComponentName + 'Home'
                            )}
                          style={style.button}
                          >
                          LOGIN
                          </Button>
                        : <Button
                        onClick={this.signIn}
                        style={style.button}

                        >
                        LOGIN
                        </Button>}
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
    ComponentName: state.reducer.item
  }
}
function mapDispatchToProps (dispatch) {
  return {
    componentList: componentValue => {
      dispatch(changeNavbar(componentValue))
    }
  }
}

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login)
