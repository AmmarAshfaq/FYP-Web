import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from './store/action/action'
import Create from '@material-ui/icons/Create'
import EmailIcon from '@material-ui/icons/Email'

import PriceIcon from '@material-ui/icons/AttachMoney'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography'

import {
  responseAddFertilizerAction,
  responseAddMachineryAction,
  responseAddPesticideAction
} from './store/action/companyAction'
import Divider from '@material-ui/core/Divider'

class PurchaseForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      quantity: '',
      price: ''
    }
  }
  handleClose = () => {
    this.props.itemValueFunc({
      toggle: false
    })
  }
  updateValue = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }

  submitForm = () => {
    let { name, email, price, quantity } = this.state
    let obj = {}
    if (this.props.itemValue.reducer.addId.machineName) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        machineId: this.props.itemValue.reducer.addId._id,
        senderId: this.props.userId,
        userType: this.props.userType.userType
        
        
      }
    } else if (this.props.itemValue.reducer.addId.name) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        _id: this.props.itemValue.reducer.addId._id,
        senderId: this.props.userId,
        userType: this.props.userType.userType
        
      }
    } else if (this.props.itemValue.reducer.addId.pesticideName) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        pesticideId: this.props.itemValue.reducer.addId._id,
        senderId: this.props.userId,
        userType: this.props.userType.userType
      }
    }
    console.log(obj)
    if (this.props.itemValue.reducer.addId.machineName) {
      this.props.addMachineryResponse(obj)
    } else if (this.props.itemValue.reducer.addId.name) {
      console.log('fer')
      this.props.addFertilizerResponse(obj)
    } else if (this.props.itemValue.reducer.addId.pesticideName) {
      console.log('pes')
      this.props.addPesticideResponse(obj)
    }
    this.setState({
      name: '',
      email: '',
      quantity: '',
      price: ''
    })
    this.props.itemValueFunc({
      toggle: false
    })
  }
  render () {
    // console.log(this.props.itemValue.reducer.selectDialog)
    return (
      <div>
        <Dialog
          open={
            this.props.itemValue.reducer.modelOpen === true &&
            this.props.itemValue.reducer.selectDialog === 'ContactCompany'
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title' style={{ textAlign: 'center' }}>
          <Typography variant='display1' color='secondry' align='center'>
              Contact Form
            </Typography>
          </DialogTitle>
          <Divider/>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              placeholder='Please Enter Your Name'
              type='text'
              fullWidth
              value={this.state.name}
              onChange={event => this.updateValue(event, 'name')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Create />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              placeholder='Please Enter Expected Price'
              type='text'
              fullWidth
              value={this.state.price}
              onChange={event => this.updateValue(event, 'price')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PriceIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              placeholder='Please Enter Quantity'
              type='text'
              fullWidth
              value={this.state.quantity}
              onChange={event => this.updateValue(event, 'quantity')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Create />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              placeholder='Please Enter Email'
              type='email'
              fullWidth
              value={this.state.email}
              onChange={event => this.updateValue(event, 'email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <Divider/>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.submitForm} color='primary'>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return {
    itemValue: state,
    userId: state.authReducer.currentUserData.user.id,
    userType: state.authReducer.currentUserData.user
  }
}
function mapDispatchToProps (dispatch) {
  return {
    itemValueFunc: data => {
      dispatch(openModel(data))
    },
    addFertilizerResponse: obj => {
      dispatch(responseAddFertilizerAction(obj))
    },
    addMachineryResponse: obj => {
      dispatch(responseAddMachineryAction(obj))
    },
    addPesticideResponse: obj => {
      dispatch(responseAddPesticideAction(obj))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseForm)
