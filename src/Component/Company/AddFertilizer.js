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

import { openModel } from '../../Container/store/action/action'

class AddFertilizer extends Component {
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
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='product'
              label='Product'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='application'
              label='Application'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Price'
              type='name'
              fullWidth
            />
            <TextField
              // onChange={this.handleChange}
              // style={styles.textStyle}
              type='file'
              label='Select File'
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
)(AddFertilizer)
