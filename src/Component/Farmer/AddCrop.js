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
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
const styles = theme => ({
  input: {
    display: 'none'
  },
  main: {
    textAlign: 'center'
  },
  pointer: {
    cursor: 'pointer'
  },
  textField: {
    marginBottom: 10
  }
})
class AddCrop extends Component {
  constructor () {
    super()
    this.state = {
      cropName: '',
      cropPrice: 0,
      image: '',
      cropWeight: 0,
      completeDate: new Date(),
      transport: false
    }
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  render () {
    const { classes } = this.props
    return (
      <div>

        <Dialog
          open={
            !!(this.props.itemValue.reducer.modelOpen === true &&
              this.props.itemValue.reducer.selectDialog === 'crop')
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title' className={classes.main}>
            Add Crop
          </DialogTitle>
          <Divider />
          <DialogContent>

            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Crop Name'
              type='text'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Crop Weight'
              type='text'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Crop Price'
              type='text'
              fullWidth
            />
            <TextField
              id='datetime-local'
              label='Select Completion Date'
              type='datetime-local'
              defaultValue='2017-05-24T10:30'
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
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
            <FormControlLabel
             label='Transport'
            style={{float:'right',fontSize:24}}
              control={
                <Checkbox
                  checked={this.state.transport}
                  onChange={e => this.setState({ transport: e })}
                  value={false}
                />
              }
             
            />

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
)(AddCrop)
