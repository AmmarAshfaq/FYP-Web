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
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
import DownArrow from '@material-ui/icons/KeyboardArrowDown'
import { connect } from 'react-redux'
import { openModel, changeNavbar } from '../../Container/store/action/action'
import { compose } from 'redux'
import AddPesticide from './AddPesticide'
import AddMachinery from './AddMachinery'
import AddFertilizer from './AddFertilizer'
import { signoutUser } from '../../Container/store/action/authAction'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
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

  handleClickOpen = () => {
    this.props.selectValue(true)
  }
  handleLogOut = passParam => {
    this.props.changeRoute(passParam)
    this.props.signoutUserComp()
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

                Company Panel
              </Typography>

            </div>
            <div>
              <Button //   onClick={this.changeScreen.bind(this, 'Main')}
                color='inherit'>
                Home
              </Button>
              <Badge color='secondary' badgeContent={4}>
                <Button color='inherit' className={classes.buttonStyle}>
                  Messege
                </Button>
              </Badge>

              <Badge color='secondary' badgeContent={6}>
                <Button color='inherit' className={classes.buttonStyle}>
                  Notification
                </Button>
              </Badge>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                onClick={this.handleClick}
                color='inherit'
              >
                More Option<DownArrow />
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                style={{ position: 'absolute', top: 40 }}
              >
                <MenuItem
                  //   onClick={this.changeScreen.bind(this, 'Farmer')}
                  onClick={this.handleClickOpen}
                >
                  Add Fertilizer
                </MenuItem>
                <MenuItem
                  //   onClick={this.changeScreen.bind(this, 'Company')}
                  onClick={this.handleClickOpen}
                >
                  Add Machinery
                </MenuItem>

                <MenuItem onClick={this.handleClickOpen}>
                  Add Pesticide
                </MenuItem>

                <MenuItem onClick={this.handleLogOut.bind(this, 'Main')}>
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
    changeRoute: passParam => {
      dispatch(changeNavbar(passParam))
    },
    signoutUserComp: () => {
      dispatch(signoutUser())
    }
  }
}

export default compose(
  withStyles(styles, { name: 'CompanyHeader' }),
  connect(null, mapDispatchToProp)
)(CompanyHeader)
