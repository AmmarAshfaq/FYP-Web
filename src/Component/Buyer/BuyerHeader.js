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
      achorEl: null,
      arrShow:[]
    }
  }
  messengerApp = passParam => {
    browserHistory.push('/messenger')
  }
  onClickLogout = passParam => {
    this.props.signoutUserComp(passParam)
  }
// componentDidMount(){
//   // var objAdd = this.props.notificationAdd;
//   // console.log(objAdd)
//   // this.setState({
//   //   arrShow: this.state.arrShow.push(objAdd)
//   // })
//   this.setState((state,props)=>({
// arrShow: state.arrShow.push(props.notificationAdd)
//   }))
// }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    // var arr = [];
    // var objAdd = this.props.notificationAdd;
    // if(objAdd !== undefined){
    // arr.push(objAdd)
    // }else{

    //   console.log("not add")
    // }
    // console.log(arr)
    // console.log(this.props.notificationAdd)
    // console.log(this.state.arrShow)
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
              <Button
                color='inherit'
                onClick={() => browserHistory.push('/buyermain')}
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
                <BuyerNotification typeSelect='Crop' />
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
    signoutUserComp: data => {
      dispatch(signoutUser(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    notificationAdd: state.farmerReducer.notificationCrop
  }
}
export default compose(
  withStyles(styles, { name: 'BuyerHeader' }),
  connect(
    mapStateToProps,
    mapDispatchToProp
  )
)(BuyerHeader)
