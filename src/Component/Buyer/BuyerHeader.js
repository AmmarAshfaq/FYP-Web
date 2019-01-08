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
import { signoutUser } from '../../Container/store/action/authAction'
import BuyerNotification from '../Notification/buyerNotification'
import HomeIcon from '../../images/Icons/Home.png'
import IconButton from '@material-ui/core/IconButton';
import MessegeIcon from '../../images/Icons/chat.png'
import Tooltip from '@material-ui/core/Tooltip'


const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 8,marginLeft:8, position: 'relative' },
  colorStyle:{color:'white',backgroundColor:'black'}

})
class BuyerHeader extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null,
      arrShow: [],
      invisible: true
    }
  }
  messengerApp = passParam => {
    browserHistory.push('/messenger')
  }
  onClickLogout = passParam => {
    this.props.signoutUserComp(passParam)
  }
 
  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }))
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
                Buyer
              </Typography>
            </div>
            <div>
            <Tooltip title='Home'>

              <IconButton
                color='inherit'
                onClick={() => browserHistory.push('/buyermain')}
              >
               <img src={HomeIcon} alt="lloading" width='40' height='35'/>
              </IconButton>
          </Tooltip>

              <Badge
                color={this.props.cropData.length === 0 ? 'secondary' : 'secondary'}
                badgeContent={
                  this.props.cropData.length === 0
                    ? null
                    : this.props.cropData.length
                }
                badgeContent={4}
              >
              <Tooltip title='Message'>

                <IconButton
                  color='inherit'
                  className={classes.buttonStyle}
                  onClick={this.messengerApp.bind(this, 'Messenger')}
                >
                  <img src={MessegeIcon} alt="loading" width='40' height='35'/>
                </IconButton>
                </Tooltip>
              </Badge>

              <Badge
                color={this.props.cropData.length === 0 ? '' : 'secondary'}
                badgeContent={
                  this.props.cropData.length === 0
                    ? null
                    : this.props.cropData.length
                }
              >
                <BuyerNotification typeSelect='Crop' />
              </Badge>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                variant="contained" 
                // color={}
                className={[classes.buttonStyle,classes.colorStyle]}
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
    signoutUserComp: data => {
      dispatch(signoutUser(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    notificationAdd: state.farmerReducer.notificationCrop,
    cropData: state.farmerReducer.cropGlobal
  }
}
export default compose(
  withStyles(styles, { name: 'BuyerHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProp
  )
)(BuyerHeader)
