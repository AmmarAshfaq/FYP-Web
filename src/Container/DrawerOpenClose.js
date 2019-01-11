import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectManu } from './store/action/action'
import HomeIcon from '../images/Icons/Home.png'
import AboutIcon from '../images/Icons/about-us.png'
import ContactIcon from '../images/Icons/letter.png'
import LoginIcon from '../images/Icons/login.png'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 10, marginLeft: 10 }
})
class DrawerOpenClose extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main'
    }
  }

  changeScreen = argument => {
    if (argument === 'Main') {
      browserHistory.push('/')
      console.log(argument)
    } else if (argument === 'Contact') {
      browserHistory.push('/contact')
    } else if (argument === 'About') {
      browserHistory.push('/about')
    } else if (argument === 'Login') {
      browserHistory.push('/login')
    }
    this.setState({ anchorEl: null })
  }
  render () {
    const { classes } = this.props
    return (
      <Fragment>
        <AppBar
          position='fixed'
          style={{ flexGrow: 1, backgroundColor: '#00806d' }}
        >
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
              <Tooltip title='Home'>
                <IconButton
                  onClick={this.changeScreen.bind(this, 'Main')}
                  color='inherit'
                  className={classes.buttonStyle}
                >
                  <img src={HomeIcon} alt='lloading' width='30' height='25' />
                </IconButton>
              </Tooltip>
              <Tooltip title='About'>
                <IconButton
                  onClick={this.changeScreen.bind(this, 'About')}
                  color='inherit'
                  className={classes.buttonStyle}
                >
                  <img src={AboutIcon} alt='lloading' width='30' height='25'/>
                </IconButton>
              </Tooltip>
              <Tooltip title='Contact Us'>
                <IconButton
                  onClick={this.changeScreen.bind(this, 'Contact')}
                  color='inherit'
                  className={classes.buttonStyle}
                >
                  <img
                    src={ContactIcon}
                    alt='lloading'
                    width='30' height='25'
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title='Login'>
                <IconButton
                  style={{ position: 'relative' }}
                  onClick={this.changeScreen.bind(this, 'Login')}
                  color='inherit'
                  className={classes.buttonStyle}
                >
                  <img src={LoginIcon} alt='lloading' width='30' height='25' />
                </IconButton>
              </Tooltip>
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

export default compose(
  connect(
    mapStateToProp,
    mapDispatchToProp
  ),
  withStyles(styles)
)(DrawerOpenClose)
