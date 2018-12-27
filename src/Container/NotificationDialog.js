import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { browserHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { compose } from 'redux'
import { connect } from 'react-redux'
const options = ['Ammar', 'Junaid', 'Meraj', 'Ubaid', 'Shams', 'Aamir'];
const ITEM_HEIGHT = 48;

class NotificationDialog extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  handleSelect = () => {
    this.props.typeSelect === 'Crop'
      ? browserHistory.push('/specificCrop')
      : this.props.typeSelect === 'Problem'
        ? browserHistory.push('/problemSolution')
        : browserHistory.push('/notificationpanel')
  }

  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    console.log(open)

    return (
      <div>
        <Button
          color='inherit'
          aria-label='More'
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
          style={{ marginRight: 5, position: 'relative' }}
        >
          Notification
        </Button>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 220
            }
          }}
          style={{ position: 'absolute', top: 45 }}
        >
          {options.map(option => (
            <MenuItem key={option} onClick={() => this.handleSelect()}>
              <Avatar
                alt='Remy Sharp'
                src={require('../images/Machinery/tractor.jpg')}
                style={{ marginRight: 5 }}
              />
              <p>{option}</p>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default NotificationDialog;
