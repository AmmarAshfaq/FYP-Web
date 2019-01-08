import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Badge
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { signoutUser } from '../../Container/store/action/authAction'
import ExpertNotification from '../Notification/expertNotification'
import HomeIcon from '../../images/Icons/Home.png'
import IconButton from '@material-ui/core/IconButton'
import MessegeIcon from '../../images/Icons/chat.png'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 8, marginLeft: 8, position: 'relative' },
  colorStyle: { color: 'white', backgroundColor: 'black' }
})
class ExpertHeader extends Component {
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
  openHome = () => {
    browserHistory.push('/expertmain')
  }

  handleLogOut = passParam => {
    this.props.signoutUserComp(passParam)
  }

  messengerApp = passParam => {
    browserHistory.push('/messenger')
  }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <Fragment>
        <AppBar
          position='fixed'
          style={{ flexGrow: 1, backgroundColor: '#00806d' }}
        >
          <Toolbar>
            <Avatar
              alt='Logo'
              src={require('../../images/logo2.jpg')}
              className={classes.avatarStyle}
            />
            <div className={classes.titleStyle}>
              <Typography variant='title' color='inherit'>
                Expert
              </Typography>
            </div>
            <div>
              <Tooltip title='Home'>
                <IconButton onClick={this.openHome.bind(this)} color='inherit'>
                  <img src={HomeIcon} alt='lloading' width='40' height='35' />
                </IconButton>
              </Tooltip>
              <Badge color='secondary' badgeContent={4}>
                <Tooltip title='Message'>
                  <IconButton
                    color='inherit'
                    className={classes.buttonStyle}
                    onClick={this.messengerApp.bind(this, 'Messenger')}
                  >
                    <img
                      src={MessegeIcon}
                      alt='loading'
                      width='40'
                      height='35'
                    />
                  </IconButton>
                </Tooltip>
              </Badge>

              <Badge
                color={
                  this.props.notificationCounter.length === 0 ? '' : 'secondary'
                }
                badgeContent={
                  this.props.notificationCounter.length === 0
                    ? null
                    : this.props.notificationCounter.length
                }
              >
                <ExpertNotification typeSelect='Problem' />
              </Badge>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                // color='inherit'
                variant='contained'
                className={[classes.buttonStyle, classes.colorStyle]}
                onClick={this.handleLogOut.bind(this, 'Main')}
              >
                Log Out
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Fragment>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    // changeRoute : (passParam)=>{
    //   dispatch(changeNavbar(passParam))
    // },
    signoutUserComp: obj => {
      dispatch(signoutUser(obj))
    }
  }
}

function mapStateToProps (state) {
  return {
    notificationCounter: state.farmerReducer.problemGlobal
  }
}
export default compose(
  withStyles(styles, { name: 'ExpertHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ExpertHeader)
