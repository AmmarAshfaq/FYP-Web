import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'

class AddMachinery extends Component {
 
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
          <DialogTitle id='form-dialog-title'>
          <Typography 
          variant='display1'
          color='secondry'
          align='center'>Add Product Detail!!</Typography>
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
              id='price'
              label='Price'
              type='name'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='discription'
              label='Discription'
              type='email'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='image'
              label='Add Image'
              type='email'
              fullWidth
            />
          </DialogContent>
          <DialogActions style={{alignItems:'center'}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddMachinery)
