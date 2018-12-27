import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import {
  addFertilizerAction,
  updateFetilizerAction
} from '../../Container/store/action/companyAction'
import { openModel } from '../../Container/store/action/action'

class AddFertilizer extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      productName: '',
      price: '',
      image_url: null,
      application: ''
    }
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  updateValue = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }
  handleSubmit = () => {
    const { name, price, productName, application, image_url } = this.state
    let obj = {
      name,
      price,
      productName,
      application,
      image_url: image_url,
      companyDetails: {
        contactEmail: this.props.companyInfo.email,
        contactNumber: '0000000000000000000000000000000000',
        contactName: this.props.companyInfo.name,
        location: '3680000000000000000000000000000',
        address: '0000000000000000000000000000'
      },
      companyName: this.props.companyInfo.name,
      companyId: this.props.companyInfo.id,
      selectId: this.props.selectId
    }
    if (this.props.selectId && this.props.selectId !== undefined) {
      this.props.updateItem(obj)
    } else {
      this.props.addItem(obj)
    }
    this.props.itemValueFunc(false)
    this.setState({
      name: '',
      price: '',
      productName: '',
      application: '',
      image_url: null
    })
  }
  updateFile = event => {
    
    this.setState({
      image_url: event.target.files[0]
    })
  }
  render () {
    return (
      <div>
        <Dialog
          open={
            this.props.itemValue.reducer.modelOpen === true &&
            this.props.itemValue.reducer.selectDialog === 'Fertilizer'
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            <Typography variant='display1' color='secondry' align='center'>
              Add Fertilizer Detail
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Name'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'name')}
              value={this.state.name}
            />
            <TextField
              autoFocus
              margin='dense'
              id='product'
              label='Product'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'productName')}
              value={this.state.productName}
            />
            <TextField
              autoFocus
              margin='dense'
              id='application'
              label='Application'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'application')}
              value={this.state.application}
            />
            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Price'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'price')}
              value={this.state.price}
            />
            <TextField
          
              type='file'
              label='Select File'
              onChange={this.updateFile}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color='primary'>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.reducer.selectListId)
  return {
    itemValue: state,
    companyInfo: state.authReducer.currentUserData.user,
    selectId: state.reducer.selectListId
  }
}
function mapDispatchToProps (dispatch) {
  return {
    itemValueFunc: data => {
      dispatch(openModel(data))
    },
    addItem: data => {
      dispatch(addFertilizerAction(data))
    },
    updateItem: data => {
      dispatch(updateFetilizerAction(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFertilizer)
