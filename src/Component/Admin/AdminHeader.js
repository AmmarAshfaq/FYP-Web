import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { signoutUser } from '../../Container/store/action/authAction'


const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
})
class AdminHeader extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null
    }
  }
 
  onClickLogout = passParam => {
    // this.props.changeRoute(passParam)
    console.log(passParam)
    this.props.signoutUserComp(passParam)
  }

  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <Fragment>
        <AppBar position='fixed' style={{ flexGrow: 1, backgroundColor: '#00806d' }}>

          <Toolbar>
            <Avatar
              alt='Logo'
              src={require('../../images/logo2.jpg')}
              className={classes.avatarStyle}
            />
            <div className={classes.titleStyle}>
              <Typography variant='title' color='inherit'>
                Admin
              </Typography>

            </div>
            <div>
             

              
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
    // changeRoute: data => {
    //   dispatch(changeNavbar(data))
    // },
    signoutUserComp: (obj) => {
      dispatch(signoutUser(obj))
    }
  }
}
export default compose(
  withStyles(styles, { name: 'AdminHeader' }),
  connect(null, mapDispatchToProp)
)(AdminHeader)
