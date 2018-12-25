import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from './store/action/action'
import {
  responseAddFertilizerAction,
  responseAddMachineryAction,
  responseAddPesticideAction
} from './store/action/companyAction'
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
        senderId: this.props.userId
      }
    } else if (this.props.itemValue.reducer.addId.name) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        _id: this.props.itemValue.reducer.addId._id,
        senderId: this.props.userId
      }
    } else if (this.props.itemValue.reducer.addId.pesticideName) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        pesticideId: this.props.itemValue.reducer.addId._id,
        senderId: this.props.userId
      }
    }
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
            Contact Form
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Please Enter Your Name'
              type='text'
              fullWidth
              value={this.state.name}
              onChange={event => this.updateValue(event, 'name')}
            />
            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Please Enter Expected Price'
              type='text'
              fullWidth
              value={this.state.price}
              onChange={event => this.updateValue(event, 'price')}
            />
            <TextField
              autoFocus
              margin='dense'
              id='image'
              label='Please Enter Quantity'
              type='text'
              fullWidth
              value={this.state.quantity}
              onChange={event => this.updateValue(event, 'quantity')}
            />
            <TextField
              autoFocus
              margin='dense'
              id='email'
              label='Please Enter Email'
              type='email'
              fullWidth
              value={this.state.email}
              onChange={event => this.updateValue(event, 'email')}
            />
          </DialogContent>
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
    userId: state.authReducer.currentUserData.user.id
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
