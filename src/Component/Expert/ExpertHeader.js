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
// import {changeNavbar} from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction'
import NotificationDialog from '../../Container/NotificationDialog'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
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
    // browserHistory.push('/login')

    // this.props.changeRoute(passParam)
    this.props.signoutUserComp(passParam)
  }

  messengerApp = passParam => {
    this.props.changeRoute(passParam)
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
              <Button onClick={this.openHome.bind(this)} color='inherit'>
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
                <NotificationDialog typeSelect='Problem' />
              </Badge>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                color='inherit'
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

export default compose(
  withStyles(styles, { name: 'ExpertHeader' }),
  connect(
    null,
    mapDispatchToProps
  )
)(ExpertHeader)
