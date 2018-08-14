import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'

class AddFertilizer extends Component {
 
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  render () {
    return (
      <div>

         <Dialog
          open={this.props.itemValue.reducer.modelOpen}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Add Product Detail!!</DialogTitle>
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
              id='price'
              label='Price'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='image'
              label='Add Image'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='description'
              label='Description'
              type='name'
              fullWidth
            />
           
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color='primary'>
              Subscribe
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFertilizer)
