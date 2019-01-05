import React, { Component, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSpecificMessages, userSelectMsgNull } from './store/action/messageAction'

const styles = theme => ({
  avatar: {
    margin: 10
  },
  paddingRemoveList: { padding: 0 }
})
class AllUserMessage extends Component {
  getAllMessage = (objId, obj) => {
    this.props.getSpecific(objId, obj)
    this.props.userMsgNull()
  }
  render () {
    const { classes, userList } = this.props
    return (
      <div style={{ height: 560, overflowY: 'auto' }}>
        {userList.map((item, ind) => (
          <Fragment keys={ind}>
            <List
              component='nav'
              className={classes.paddingRemoveList}
              onClick={() => this.getAllMessage(item.conversationId, item)}
            >
              <ListItem button>
                <Avatar
                  alt='Remy Sharp'
                  src={require('../images/malik.jpg')}
                  className={classes.avatar}
                />
                <ListItemText
                  primary={item.receiverInfo.receiverName}
                  secondary={item.message.substring(0, 15)}
                />
              </ListItem>
            </List>
            <Divider />
          </Fragment>
        ))}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    userList: state.messageReducer.allUserList,
    loader: state.messageReducer.loader
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getSpecific: (objId, obj) => {
      dispatch(getSpecificMessages(objId, obj))
    },
    userMsgNull:()=>{
      dispatch(userSelectMsgNull())
    }
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(AllUserMessage)
