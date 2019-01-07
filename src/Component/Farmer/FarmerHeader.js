import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Badge
} from '@material-ui/core'

import DownArrow from '@material-ui/icons/KeyboardArrowDown'
import { withStyles } from '@material-ui/core/styles'
import AddProblem from './AddProblem'
import AddCrop from './AddCrop'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction'
import {notificationAction} from '../../Container/store/action/farmerAction'
import { compose } from 'redux'
import { browserHistory } from 'react-router'
import FarmerNotification from '../Notification/farmerNotification';
const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
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
  componentWillMount(){
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
              <Button
                color='inherit'
                className={classes.buttonStyle}
                onClick={this.openHome.bind(this)}
              >
                Home
              </Button>

              <Badge color='secondary' badgeContent={4}>
                <Button
                  color='inherit'
                  className={classes.buttonStyle}
                  onClick={this.messengerApp.bind(this, 'Messenger')}
                >
                  Messege
                </Button>
              </Badge>

              <Badge color='secondary' badgeContent={6}>
               
               
               <FarmerNotification typeSelect='Crop'/>
              </Badge>

              <Button
                aria-haspopup='true'
                onClick={this.handleClick}
                color='inherit'
                className={classes.buttonStyle}
              >
                More <DownArrow />
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                style={{ position: 'absolute', top: 40 }}
              >
                <MenuItem onClick={this.handleClickOpen.bind(this, 'Problem')}>
                  Add Problem
                </MenuItem>
                <MenuItem onClick={this.handleClickOpen.bind(this, 'Crops')}>
                  Add Crop
                </MenuItem>
                <MenuItem onClick={this.handleClickAddItem.bind(this)}>
                  Added Item
                </MenuItem>
                <MenuItem onClick={this.handleLogOut.bind(this, 'Main')}>
                  Log Out
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
    notification:data =>{
      dispatch(notificationAction(data))
    }
  }
}

function mapStateToProps (state) {
  return {
    userIdentity: state.authReducer.currentUserData.user,
    token:state.authReducer.tokenForNoti
  }
}


export default compose(
  withStyles(styles, { name: 'FarmerHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProp
  )
)(FarmerHeader)
