import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'

import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'

import MoreIcon from '@material-ui/icons/MoreVert'
import { Grid, Paper, Avatar } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import {
  ConnectWithSocket,
  getAllMessage,
  userSelectMsgNull
} from '../Container/store/action/messageAction'
import { compose } from 'redux'
import { connect } from 'react-redux'
import AllUserMessages from './AllUserMessages'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 85
  },
  grow: {
    flexGrow: 1
  },

  title: {
    marginLeft: 285,
    fontSize: 28,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  paddingRemoveList: { padding: 0 },
  button: {
    margin: theme.spacing.unit,
    justifyContent: 'flex-end'
  }
})

class Messenger extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    message: ''
  }

  componentWillMount () {
    this.props.getUserMessage(this.props.userId.id)
  }
  componentDidMount () {}
  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props.msgList.length)
  //   console.log(nextProps.length)
  //   // if(this.props.msgList.length < nextProps.length)
  //   // {

  //   // }
  // }
  changeValue = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }
  componentWillUnmount () {
    this.props.userMsgNull()
  }
  sendMessage = data => {
    console.log(data)
    let obj = {}
    if (this.props.userId.userType === 'Farmer') {
      if (this.props.getConnect.user_id) {
        obj = {
          receiverInfo: {
            receiverId: this.props.getConnect.user_id,
            receiverType: this.props.getConnect.userType,
            receiverName: this.props.getConnect.user_name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.userId.id}${
            this.props.getConnect.user_id
          }`
        }
      } else if (data.receiverInfo.receiverId === this.props.userId.id) {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.receiverInfo.receiverId,
            senderName: data.receiverInfo.receiverName,
            senderType: data.receiverInfo.receiverType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      } else {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.senderInfo.senderId,
            senderName: data.senderInfo.senderName,
            senderType: data.senderInfo.senderType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      }
    } else if (this.props.userId.userType === 'Buyer') {
      if (this.props.getConnect.userType === 'Farmer') {
        obj = {
          // cb
          // fb

          receiverInfo: {
            receiverId: this.props.getConnect.user_id,
            receiverType: this.props.getConnect.userType,
            receiverName: this.props.getConnect.user_name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.getConnect.user_id}${
            this.props.userId.id
          }`
        }
      } else if (this.props.getConnect.userType === 'Company') {
        obj = {
          // cb
          // fb

          receiverInfo: {
            receiverId: this.props.getConnect.user_id,
            receiverType: this.props.getConnect.userType,
            receiverName: this.props.getConnect.user_name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.getConnect.user_id}${
            this.props.userId.id
          }`
        }
      } else if (data.receiverInfo.receiverId === this.props.userId.id) {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.receiverInfo.receiverId,
            senderName: data.receiverInfo.receiverName,
            senderType: data.receiverInfo.receiverType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      } else {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.senderInfo.senderId,
            senderName: data.senderInfo.senderName,
            senderType: data.senderInfo.senderType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      }
    }

    // console.log(obj)
    else if (this.props.userId.userType === 'Expert') {
      if (this.props.getConnect.userType === 'Farmer') {
        obj = {
          // ce
          // fe
          receiverInfo: {
            receiverId: this.props.getConnect.user_id,
            receiverType: this.props.getConnect.userType,
            receiverName: this.props.getConnect.user_name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.getConnect.user_id}${
            this.props.userId.id
          }`
        }
      } else if (this.props.getConnect.userType === 'Company') {
        obj = {
          // ce
          // fe
          receiverInfo: {
            receiverId: this.props.getConnect.user_id,
            receiverType: this.props.getConnect.userType,
            receiverName: this.props.getConnect.user_name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.getConnect.user_id}${
            this.props.userId.id
          }`
        }
      } else if (data.receiverInfo.receiverId === this.props.userId.id) {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.receiverInfo.receiverId,
            senderName: data.receiverInfo.receiverName,
            senderType: data.receiverInfo.receiverType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      } else {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.senderInfo.senderId,
            senderName: data.senderInfo.senderName,
            senderType: data.senderInfo.senderType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      }
    } else if (this.props.userId.userType === 'Company') {
      if (this.props.storeMessage.userType === 'Farmer') {
        obj = {
          // fc
          // bc
          // ec
          receiverInfo: {
            receiverId: this.props.storeMessage.senderId,
            receiverType: this.props.storeMessage.userType,
            receiverName: this.props.storeMessage.name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.storeMessage.senderId}${
            this.props.userId.id
          }`
        }
      } else if (this.props.storeMessage.userType === 'Expert') {
        obj = {
          // cb
          // fb

          receiverInfo: {
            receiverId: this.props.storeMessage.senderId,
            receiverType: this.props.storeMessage.userType,
            receiverName: this.props.storeMessage.name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.userId.id}${
            this.props.storeMessage.senderId
          }`
        }
      } else if (this.props.storeMessage.userType === 'Buyer') {
        obj = {
          receiverInfo: {
            receiverId: this.props.storeMessage.senderId,
            receiverType: this.props.storeMessage.userType,
            receiverName: this.props.storeMessage.name
          },
          senderInfo: {
            senderId: this.props.userId.id,
            senderName: this.props.userId.name,
            senderType: this.props.userId.userType
          },
          message: this.state.message,
          conversationId: `${this.props.userId.id}${
            this.props.storeMessage.senderId
          }`
        }
      } else if (data.receiverInfo.receiverId === this.props.userId.id) {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.receiverInfo.receiverId,
            senderName: data.receiverInfo.receiverName,
            senderType: data.receiverInfo.receiverType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      } else {
        obj = {
          receiverInfo: {
            receiverId: data.senderInfo.senderId,
            receiverType: data.senderInfo.senderName,
            receiverName: data.senderInfo.senderType
          },
          senderInfo: {
            senderId: data.senderInfo.senderId,
            senderName: data.senderInfo.senderName,
            senderType: data.senderInfo.senderType
          },
          message: this.state.message,
          conversationId: data.conversationId
        }
      }
    }
    this.props.connectSocket(obj)
  }
  render () {
    const { anchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={3}>
            <Paper>
              <AllUserMessages />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper>
              {!this.props.loader ? (
                <div
                  style={{
                    height: 510,
                    backgroundColor: '#8080803b',
                    overflowY: 'auto'
                  }}
                >
                  {this.props.msgList.map((item, ind) => (
                    <Fragment keys={ind}>
                      {item.senderInfo.senderId === this.props.userId.id ? (
                        <div
                          style={{
                            display: 'flex',
                            float: 'left',
                            width: '100%'
                          }}
                        >
                          {/* {console.log(
                            'Message User ',
                            item.senderInfo.senderName
                          )} */}
                          <Avatar
                            alt='Ammar'
                            src={require('../images/ammar.jpg')}
                            className={classNames(
                              classes.avatar,
                              classes.bigAvatar
                            )}
                          />
                          <p style={{ height: '100%' }}>
                            <span
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginBottom: 8,
                                height: '50%',
                                fontSize: 24
                              }}
                            >
                              {item.senderInfo.senderName}
                              {/* {console.log(item.receiverInfo.receiverName)} */}
                            </span>
                            <span
                              style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                height: '50%'
                              }}
                            >
                              {item.message}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            float: 'right',
                            width: '100%',
                            justifyContent: 'flex-end'
                          }}
                        >
                          <p style={{ height: '100%' }}>
                            <span
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginBottom: 8,
                                height: '50%',
                                fontSize: 24
                              }}
                            >
                              {item.senderInfo.senderName}
                              {/* { console.log(item.senderInfo.senderName)} */}
                            </span>
                            <span
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                height: '50%'
                              }}
                            >
                              {item.message}
                            </span>
                          </p>

                          <Avatar
                            alt='Ammar'
                            src={require('../images/mobeen.jpg')}
                            className={classNames(
                              classes.avatar,
                              classes.bigAvatar
                            )}
                          />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    height: 510,
                    backgroundColor: '#8080803b',
                    overflowY: 'auto'
                  }}
                />
              )}

              <div
                style={{
                  height: 50,
                  backgroundColor: '#fff',
                  display: 'flex',
                  width: '100%'
                }}
              >
                <TextField
                  style={{ width: '80%', marginBottom: 0 }}
                  placeholder='Enter Message ....'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={this.state.message}
                  onChange={event => this.changeValue(event, 'message')}
                />
                <Button
                  color='primary'
                  style={{ width: '20%', fontSize: '24px' }}
                  onClick={() => this.sendMessage(this.props.userSelectedMsg)}
                >
                  SEND
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    connectSocket: data => {
      dispatch(ConnectWithSocket(data))
    },
    getUserMessage: data => {
      dispatch(getAllMessage(data))
    },
    userMsgNull: () => {
      dispatch(userSelectMsgNull())
    }
  }
}

function mapStateToProps (state) {
  return {
    userId: state.authReducer.currentUserData.user,
    msgList: state.messageReducer.allMsgList,
    getConnect: state.messageReducer.userSelect,
    storeMessage: state.companyReducer.connectMsg,
    loader: state.companyReducer.loader,
    userSelectedMsg: state.messageReducer.selectUserFromList
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Messenger)
