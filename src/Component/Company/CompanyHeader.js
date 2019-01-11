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
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'
import { compose } from 'redux'
import AddPesticide from './AddPesticide'
import AddMachinery from './AddMachinery'
import AddFertilizer from './AddFertilizer'
import { signoutUser } from '../../Container/store/action/authAction'
import CompanyNotification from '../Notification/companyNotification'
import HomeIcon from '../../images/Icons/Home.png'
import IconButton from '@material-ui/core/IconButton'
import MessegeIcon from '../../images/Icons/chat.png'
import MoreIcon from '../../images/Icons/more.png'
import AddItem from '@material-ui/icons/AddCircle'
import ListItem from '@material-ui/icons/List'
import Tooltip from '@material-ui/core/Tooltip'


import LOGOUT from '../../images/Icons/logout.png'
const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 8, marginLeft: 8, position: 'relative' }
})
class CompanyHeader extends Component {
  constructor () {
    super()
    this.state = {
      achorEl: null
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleClickOpen = obj => {
    let objSet = {
      toggle: true,
      specificDialog: obj
    }
    console.log(objSet)
    this.props.selectValue(objSet)
  }

  handleLogOut = passParam => {
    this.props.signoutUserComp(passParam)
  }
  messengerApp = passParam => {
    if (passParam === 'Messenger') {
      browserHistory.push('/messenger')
    } else {
      browserHistory.push('/allResponse')
    }
  }
  openHome = () => {
    browserHistory.push('/companymain')
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
                Company Panel
              </Typography>
            </div>
            <div>
            <Tooltip title='Home'>

              <IconButton
                color='inherit'
                onClick={this.openHome.bind(this)}
                className={classes.buttonStyle}
              >
                <img src={HomeIcon} alt='lloading' width='30' height='25' />
              </IconButton>
              </Tooltip>
              <Badge color='secondary' badgeContent={4}>
              <Tooltip title='Message'>

                <IconButton
                  color='inherit'
                  className={classes.buttonStyle}
                  onClick={this.messengerApp.bind(this, 'Messenger')}
                >
                  <img src={MessegeIcon} alt='loading' width='30' height='25' />
                </IconButton>
                </Tooltip>
              </Badge>

              <Badge  color={
                  this.props.companyNotification.length === 0 ? '' : 'secondary'
                }
                badgeContent={
                  this.props.companyNotification.length === 0
                    ? null
                    : this.props.companyNotification.length
                }>
                <CompanyNotification typeSelect='' />
              </Badge>
              <Tooltip title='More Features'>

              <IconButton
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                onClick={this.handleClick}
                className={classes.buttonStyle}
                color='inherit'
              >
                <img src={MoreIcon} alt='loading' width='30' height='25' />
              </IconButton>
              </Tooltip>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                style={{ position: 'absolute', top: 40 }}
              >
                <MenuItem
                  onClick={this.handleClickOpen.bind(this, 'Fertilizer')}
                >
                <AddItem/>  {"\u00A0"} Add Fertilizer
                </MenuItem>
                <MenuItem
                  onClick={this.handleClickOpen.bind(this, 'Machinery')}
                >
                <AddItem/>  {"\u00A0"} Add Machinery
                </MenuItem>
                <MenuItem
                  onClick={this.handleClickOpen.bind(this, 'Pesticide')}
                >
                 <AddItem/> {"\u00A0"} Add Pesticide
                </MenuItem>
                <MenuItem onClick={this.messengerApp.bind(this, 'Response')}>
                <ListItem/>  {"\u00A0"} All Response
                </MenuItem>
                <MenuItem onClick={this.handleLogOut.bind(this, 'Main')}>
                <img src={LOGOUT} alt='loading' width='25' height='25' />
                {"\u00A0"}
                  Log Out
                </MenuItem>
                s{' '}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <AddPesticide />
        <AddFertilizer />
        <AddMachinery />
      </Fragment>
    )
  }
}

function mapDispatchToProp (dispatch) {
  return {
    selectValue: data => {
      dispatch(openModel(data))
    },

    signoutUserComp: data => {
      dispatch(signoutUser(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    companyNotification: state.farmerReducer.companyNotification
  }
}
export default compose(
  withStyles(styles, { name: 'CompanyHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProp
  )
)(CompanyHeader)
