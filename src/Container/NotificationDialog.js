// import React, { Component ,Fragment} from 'react'
// import { withStyles } from '@material-ui/core/styles';
// const styles ={

// }

// class NotificationDialog extends Component {

//   render () {
//     return (
//       <Fragment>
//         {console.log("ammar")}
//         </Fragment>
//     )
//   }
// }

// export default withStyles(styles)(NotificationDialog)

import React from 'react'
// import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
import { browserHistory } from 'react-router'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
]

const ITEM_HEIGHT = 48

class LongMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })

  }

  handleClose = () => {
    this.setState({ anchorEl: null })
    this.props.typeSelect === "Crop"?
    browserHistory.push('/specificCrop')
    : this.props.typeSelect === "Problem"?
    browserHistory.push('/problemSolution')
    :
    browserHistory.push('/notificationpanel')
    
  }

  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

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
              width: 200
            }
          }}
          style={{ position: 'absolute', top: 45 }} // changing
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default LongMenu
