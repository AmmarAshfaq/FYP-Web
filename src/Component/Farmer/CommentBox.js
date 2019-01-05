import React, { Component, Fragment } from 'react'
import { Grid,
   Typography,
   } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import { compose } from 'redux'
import { browserHistory } from 'react-router'

import {
  addCommentAction,
  selectCommentId,
  updateCommentAction,
  deleteCommentAction
} from '../../Container/store/action/commentAction'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/Delete'
import MessageIcon from '@material-ui/icons/Message'
import UpdateIcon from '@material-ui/icons/Update'
import { startMessage } from '../../Container/store/action/messageAction'
const styles = theme => ({
  leftMargin: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  },
  paddingText: {
    padding: 10
  },
  avatar: {
    margin: 10
  },
  button: {
    margin: theme.spacing.unit
  },
  butonPosition: {
    float: 'right'
  }
})
class CommentBox extends Component {
  constructor () {
    super()
    this.state = {
      comment: ''
    }
  }
  handleChange = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }
  updateComment = (message, idSelect) => {
    this.setState({
      comment: message
    })
    this.props.commentId(idSelect)
  }
  startMessage = obj => {
    console.log(obj)
    this.props.messageStart(obj)
    browserHistory.push('/messenger')
  }
  deleteComment = commentId => {
    let obj = {}
    if (this.props.typeCheck === 'crop') {
      obj = {
        _id: this.props.cropDetail._id,
        comment_id: commentId,
        type: this.props.typeCheck
      }
    } else {
      obj = {
        _id: this.props.problemDetail._id,
        comment_id: commentId,
        type: this.props.typeCheck
      }
    }
    this.props.commentDelete(obj)
  }
  submitComment = () => {
    let obj = {}
    if (this.props.typeCheck === 'crop') {
      obj = {
        _id: this.props.cropDetail._id,
        comment: this.state.comment,
        user_id: this.props.userImage.id,
        user_name: this.props.userImage.name,
        type: this.props.typeCheck,
        comment_id: this.props.selectId,
        userType: this.props.userImage.userType
      }
    } else {
      obj = {
        _id: this.props.problemDetail._id,
        comment: this.state.comment,
        user_id: this.props.userImage.id,
        user_name: this.props.userImage.name,
        type: this.props.typeCheck,
        comment_id: this.props.selectId,
        userType: this.props.userImage.userType

      }
    }
  
    if (this.props.selectId && this.props.selectId !== undefined) {
      this.props.commentUpdate(obj)
      this.props.commentId(undefined)
    } else {
      this.props.commentAdd(obj)
    }
  }
  render () {
    const { classes } = this.props
    return (
      <Grid item xs={12} container spacing={24} className={classes.leftMargin}>
        <Grid item xs={8}>
          <Grid item xs={12} container spacing={24}>
            <Grid item xs={1}>
              <Avatar
                alt='user'
                src={this.props.userImage.image_url}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                style={{ margin: 8 }}
                placeholder='Add Comment'
                value={this.state.comment}
                onChange={event => this.handleChange(event, 'comment')}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => this.submitComment()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          {this.props.dataArr.map((item, ind) => (
            <Grid item xs={12} keys={ind}>
              <Grid container spacing={16}>
                <Grid item>
                  <img
                    className={classes.img}
                    alt='complex'
                    src={require('../../images/malik.jpg')}
                    width='60'
                    height='60'
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant='title'>
                        {item.user_name}
                      </Typography>
                      <Typography gutterBottom>{item.comment}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>
                        Reply
                      </Typography>
                    </Grid>
                  </Grid>
                  {item.user_id === this.props.userImage.id ? (
                    <Fragment>
                      <IconButton
                        aria-label='Update'
                        className={classes.butonPosition}
                        onClick={() =>
                          this.updateComment(item.comment, item._id)
                        }
                      >
                        <UpdateIcon />
                      </IconButton>
                      <IconButton
                        aria-label='Delete'
                        className={classes.butonPosition}
                        onClick={() => this.deleteComment(item._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Fragment>
                  ) : null}
                  {item.user_id !== this.props.userImage.id ? (
                    <IconButton
                      aria-label='Message'
                      className={classes.butonPosition}
                      onClick={() => this.startMessage(item)}
                    >
                      <MessageIcon />
                    </IconButton>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4} />
      </Grid>
    )
  }
}
function mapStateToProps (state) {
 
  return {
    userImage: state.authReducer.currentUserData.user,
    cropDetail: state.allAddedItemReducer.specificCrop,
    selectId: state.allAddedItemReducer.commentID,
    problemDetail: state.allAddedItemReducer.specificProblem
  }
}
function mapDispatchToProps (dispatch) {
  return {
    commentAdd: obj => {
      dispatch(addCommentAction(obj))
    },
    commentId: obj => {
      dispatch(selectCommentId(obj))
    },
    commentUpdate: obj => {
      dispatch(updateCommentAction(obj))
    },
    commentDelete: obj => {
      dispatch(deleteCommentAction(obj))
    },
    messageStart: obj => {
      dispatch(startMessage(obj))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CommentBox)
