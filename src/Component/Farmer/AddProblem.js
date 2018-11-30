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
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Audio from '@material-ui/icons/Mic'

import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  input: {
    display: 'none'
  },
  main: {
    textAlign: 'center'
  },
  pointer: {
    cursor: 'pointer'
  }
})
class AddProblem extends Component {
  constructor () {
    super()
    this.state = {
      problemName: '',
      problemDescription: '',
      image: '',
      audio: ''
    }
  }

  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  render () {
    const { classes } = this.props
    // console.log(this.props.itemValue.reducer.modelOpen)
    return (
      <div>

        <Dialog
          open={
            !!(this.props.itemValue.reducer.modelOpen === true &&
              this.props.itemValue.reducer.selectDialog === 'Problem')
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >

          <DialogTitle id='form-dialog-title' className={classes.main}>
            Add Problem
          </DialogTitle>
          <Divider />
          <DialogContent>

          <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Problem Name You Face'
              type='text'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Problem Description'
              type='text'
              fullWidth
            />

            <input
              accept='image/*'
              className={classes.input}
              id='contained-button-file'
              multiple
              type='file'
              // placeholder="choose image"
            />
            <label htmlFor='contained-button-file'>
              <Button variant='contained' component='span'>
                <PhotoCamera />
                Add Image
              </Button>

            </label>

            <input
              accept='image/*'
              className={classes.input}
              id='contained-button-file'
              multiple
              type='file'
              // placeholder="choose image"
            />
            <label htmlFor='contained-button-file' style={{ float: 'right' }}>
              <Button variant='contained' component='span'>
                <Audio />
                Add Audio
              </Button>

            </label>

          </DialogContent>
          <Divider />
          <DialogActions className={classes.pointer}>
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(AddProblem)
