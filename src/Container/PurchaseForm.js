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

class PurchaseForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      productName: '',
      description: '',
      price: 0,
      image: '',
      application: ''
    }
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  render () {
    console.log(this.props.itemValue.reducer.selectDialog)
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
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Please Enter Expected Price'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='image'
              label='Please Enter Quantity'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='description'
              label='Please Enter Email'
              type='email'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color='primary'>
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
    itemValue: state
  }
}
function mapDispatchToProps (dispatch) {
  return {
    itemValueFunc: data => {
      dispatch(openModel(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseForm)
