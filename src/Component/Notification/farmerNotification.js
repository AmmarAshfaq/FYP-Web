import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { browserHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import NotificationIcon from '../../images/Icons/notification.png'
import Tooltip from '@material-ui/core/Tooltip'
import {
  getFertilizerIdAction,
  getMachineryIdAction,
  getPesticideIdAction
} from '../../Container/store/action/companyAction'
const ITEM_HEIGHT = 48

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
  handleSelect = data => {
    data.type === 'Problem'
      ? console.log(data)
      : // ? browserHistory.push({
    //   pathname: '/problemSolution',
    //   state: { typeCheck: this.props.typeSelect,
    //   // selectId: selectId
    //  }
    // })
      this.companyFetch(data)
  }
  companyFetch = data => {
    console.log(data)
    // console.log(data)
    if (data.name) {
      this.props.getFertilizerProduct(data)
    } else if (data.machineName) {
      this.props.getMachineryProduct(data)
    } else if (data.pesticideName) {
      this.props.getPesticideProduct(data)
    }
    browserHistory.push('/productdata')
  }
  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
        <Tooltip title='Notifications'>
          <IconButton
            color='inherit'
            aria-label='More'
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup='true'
            onClick={this.handleClick}
            style={{ marginRight: 5, position: 'relative' }}
          >
            <img src={NotificationIcon} alt='loading' width='30' height='25' />
          </IconButton>
        </Tooltip>
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
          {this.props.farmerNotification.map(option => (
            <MenuItem key={option} onClick={() => this.handleSelect(option)}>
              <Avatar
                alt='Remy Sharp'
                src={option.image_url}
                style={{ marginRight: 5 }}
              />
              <p>
                {' '}
                {option.name
                  ? option.name.substring(0, 15)
                  : option.pesticideName
                    ? option.pesticideName.substring(0, 15)
                    : option.machineName
                      ? option.machineName.substring(0, 15)
                      : null}
              </p>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    farmerNotification: state.farmerReducer.farmerGlobalNoti
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getFertilizerProduct: data => {
      dispatch(getFertilizerIdAction(data))
    },
    getMachineryProduct: data => {
      dispatch(getMachineryIdAction(data))
    },
    getPesticideProduct: data => {
      dispatch(getPesticideIdAction(data))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationDialog)
