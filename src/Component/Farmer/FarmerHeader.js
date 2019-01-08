import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Badge
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import AddProblem from './AddProblem'
import AddCrop from './AddCrop'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction'
import { notificationAction } from '../../Container/store/action/farmerAction'
import { compose } from 'redux'
import { browserHistory } from 'react-router'
import FarmerNotification from '../Notification/farmerNotification'
import HomeIcon from '../../images/Icons/Home.png'
import IconButton from '@material-ui/core/IconButton'
import MessegeIcon from '../../images/Icons/chat.png'
import MoreIcon from '../../images/Icons/more.png'
import Tooltip from '@material-ui/core/Tooltip'
import AddItem from '@material-ui/icons/AddCircle'
import LOGOUT from '../../images/Icons/logout.png'
import ListItem from '@material-ui/icons/List'



const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 8, marginLeft: 8, position: 'relative' }
})
class FarmerHeader extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null,
      open: false
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClickNoti = event => {
    this.setState({ open: true })
  }
  componentWillMount () {
    this.props.notification(this.props.token)
  }

  handleClose = () => {
    this.setState({ anchorEl: null, open: false })
  }
  handleClickOpen = obj => {
    let objSet = {
      toggle: true,
      specificDialog: obj
    }
    this.props.selectValue(objSet)
  }
  handleClickAddItem = () => {
    browserHistory.push('/AddedItem')
  }
  openHome = () => {
    browserHistory.push('/farmermain')
  }
  handleLogOut = passParam => {
    console.log(passParam)
    this.props.signOutComp(passParam)
  }
  messengerApp = passParam => {
    browserHistory.push('/messenger')
  }
  render () {
    console.log(this.props.token)
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
                Farmer
              </Typography>
            </div>
            <div>
            <Tooltip title='Home'>
              
              <IconButton
                color='inherit'
                className={classes.buttonStyle}
                onClick={this.openHome.bind(this)}
              >
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
                  <img src={MessegeIcon} alt='loading' width='40' height='35' />
                </IconButton>
                </Tooltip>
              </Badge>

              <Badge
                color={
                  this.props.farmerNotification.length === 0 ? '' : 'secondary'
                }
                badgeContent={
                  this.props.farmerNotification.length === 0
                    ? null
                    : this.props.farmerNotification.length
                }
              >
              <Tooltip title='Home'>

                <FarmerNotification typeSelect='Crop' />
                </Tooltip>
              </Badge>
              <Tooltip title='More features'>

              <IconButton
                aria-haspopup='true'
                onClick={this.handleClick}
                color='inherit'
                className={classes.buttonStyle}
              >
                <img src={MoreIcon} alt='loading' width='40' height='35' />
              </IconButton>
              </Tooltip>
              
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                style={{ position: 'absolute', top: 50 }}
              >
                <MenuItem onClick={this.handleClickOpen.bind(this, 'Problem')}>
               <AddItem/>  {"\u00A0"} Add Problem
                </MenuItem>
                <MenuItem onClick={this.handleClickOpen.bind(this, 'Crops')}>
                <AddItem/>  {"\u00A0"} Add Crop
                </MenuItem>
                <MenuItem onClick={this.handleClickAddItem.bind(this)}>
                <ListItem/>  {"\u00A0"}  Added Item
                </MenuItem>
                <MenuItem onClick={this.handleLogOut.bind(this, 'Main')}>
                <img src={LOGOUT} alt='loading' width='25' height='25' />
                {"\u00A0"}      Log Out
                </MenuItem>
                s{' '}
              </Menu>
            </div>
            <AddProblem />
            <AddCrop />
          </Toolbar>
        </AppBar>
      </Fragment>
    )
  }
}
function mapDispatchToProp (dispatch) {
  return {
    selectValue: data => {
      dispatch(openModel(data))
    },

    signOutComp: data => {
      dispatch(signoutUser(data))
    },
    notification: data => {
      dispatch(notificationAction(data))
    }
  }
}

function mapStateToProps (state) {
  return {
    userIdentity: state.authReducer.currentUserData.user,
    token: state.authReducer.tokenForNoti,
    farmerNotification: state.farmerReducer.farmerGlobalNoti
  }
}

export default compose(
  withStyles(styles, { name: 'FarmerHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProp
  )
)(FarmerHeader)
