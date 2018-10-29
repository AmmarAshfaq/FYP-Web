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
import { compose } from 'redux'
import { connect } from 'react-redux'
import { changeNavbar } from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
})
class BuyerHeader extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null
    }
  }
  messengerApp = (passParam) => {
    this.props.changeRoute(passParam);
    browserHistory.push('/messenger')
  }
  onClickLogout = passParam => {
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
                Buyer
              </Typography>

            </div>
            <div>
              <Button color='inherit'>
                Home
              </Button>
              <Badge color='secondary' badgeContent={4}>
                <Button color='inherit' className={classes.buttonStyle}
                 onClick={this.messengerApp.bind(this,'Messenger')}
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
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                color='inherit'
                onClick={this.onClickLogout.bind(this, 'Main')}
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

function mapDispatchToProp (dispatch) {
  return {
    changeRoute: data => {
      dispatch(changeNavbar(data))
    },
    signoutUserComp: () => {
      dispatch(signoutUser())
    }
  }
}
export default compose(
  withStyles(styles, { name: 'BuyerHeader' }),
  connect(null, mapDispatchToProp)
)(BuyerHeader)
