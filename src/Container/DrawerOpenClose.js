import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectManu } from './store/action/action'
const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 }
})
class DrawerOpenClose extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () =>{
    this.setState({anchorEl:null})
  }
 
  changeScreen = argument => {
   
    if (argument === 'Main') {
      browserHistory.push('/')
      console.log(argument)
    }  else if (argument === 'Contact') {
      browserHistory.push('/contact')
    } else if (argument === 'About') {
      browserHistory.push('/about')
    }
    else if( argument === 'Login'){
      browserHistory.push('/login')
    }
    this.setState({ anchorEl: null })
  }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <Fragment>
        <AppBar position='fixed' style={{ flexGrow: 1 ,backgroundColor:'#00806d'}} >

            <Toolbar>
              <Avatar
                alt='Logo'
                src={require('../images/logo2.jpg')}
                className={classes.avatarStyle}
                />
              <div className={classes.titleStyle}>
                <Typography variant='title' color='inherit'>

                    SAES
                  </Typography>
                <Typography variant='subheading' color='inherit'>
                    Smart Agriculture Extension Services
                  </Typography>
              </div>
              <div>
                <Button
                  onClick={this.changeScreen.bind(this, 'Main')}
                  color='inherit'
                  >
                    Home
                  </Button>
                <Button
                  onClick={this.changeScreen.bind(this, 'About')}
                  color='inherit'
                  >
                    About
                  </Button>
                <Button
                  onClick={this.changeScreen.bind(this, 'Contact')}
                  color='inherit'
                  >
                    Contact
                  </Button>
                <Button
                style={{position:'relative'}}
                  // aria-owns={anchorEl ? 'simple-menu' : null}
                  // aria-haspopup='true'
                  // onClick={this.handleClick}
                  onClick={this.changeScreen.bind(this,'Login')}
                  color='inherit'
                  >
                    LogIn
                  </Button>
              
              </div>

            </Toolbar>

          </AppBar>
          

      </Fragment>
    )
  }
}
function mapStateToProp (state) {
  // console.log(state.reducer.item)
  return {
    itemList: state.reducer
  }
}
function mapDispatchToProp (dispatch) {
  return {
    itemAdd: inputData => {
      dispatch(selectManu(inputData))
    }
  }
}

export default compose(connect(mapStateToProp, mapDispatchToProp),withStyles(styles))(
  DrawerOpenClose
)
