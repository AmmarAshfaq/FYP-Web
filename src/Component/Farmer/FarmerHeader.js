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
import { openModel, changeNavbar } from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction'
import { compose } from 'redux'
import { browserHistory } from 'react-router'

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
      achorEl: null
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  handleClickOpen = () => {
    this.props.selectValue(true)
  }

  handleLogOut = passParam => {
    // browserHistory.push('/login')
    this.props.ChangeRoute(passParam)
    this.props.signOutComp()
  }
  messengerApp = () => {
    browserHistory.push('/messenger')
  }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <Fragment>
        <AppBar position='fixed' style={{ flexGrow: 1 }}>

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
              <Button color='inherit' className={classes.buttonStyle}>
                Home
              </Button>

              <Badge color='secondary' badgeContent={4}>
                <Button
                  color='inherit'
                  className={classes.buttonStyle}
                  onClick={this.messengerApp}
                >
                  Messege
                </Button>
              </Badge>

              <Badge color='secondary' badgeContent={6}>
                <Button color='inherit' className={classes.buttonStyle}>
                  Notification
                </Button>
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
                <MenuItem onClick={this.handleClickOpen}>
                  Add Problem
                </MenuItem>
                <MenuItem onClick={this.handleClickOpen}>
                  Add Crop
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
    ChangeRoute: data => {
      dispatch(changeNavbar(data))
    },
    signOutComp: () => {
      dispatch(signoutUser())
    }
  }
}

export default compose(
  withStyles(styles, { name: 'FarmerHeader' }),
  connect(null, mapDispatchToProp)
)(FarmerHeader)
