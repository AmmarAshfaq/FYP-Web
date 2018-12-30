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
import Alert from 'react-s-alert'

import {
  addCropAction,
  updateCropAction
} from '../../Container/store/action/farmerAction'
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
      name: '',
      price: '',
      image_url: null,
      wieght: '',
      date: new Date(),
      transport: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  showAlertMessage = message => {
    Alert.error(message || 'Something is wrong', {
      position: 'bottom-right',
      effect: 'slide',
      timeout: 'none'
    })
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  handleSubmit = () => {
    const { name, price, image_url, wieght, date, transport } = this.state
    // console.log(this.state)
    if (
      name !== '' &&
      price !== '' &&
      image_url !== '' &&
      wieght !== '' &&
      date !== ''
    ) {
      const objData = {
        name: name,
        price: price,
        image_url: image_url,
        wieght: wieght,
        date: date,
        transport: transport,
        farmerId: this.props.farmerID,
        selectId: this.props.selectId
      }
      if (this.props.selectId && this.props.selectId !== undefined) {
        this.props.cropDataUpdate(objData)
      } else {
        this.props.addCropData(objData)
      }
    } else {
      this.showAlertMessage('Please Insert Some Data')
    }
    this.props.itemValueFunc(false)
    this.setState({
      name: '',
      price: '',
      image_url: null,
      date: new Date(),
      transport: false
    })
  }
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  updateBol = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.checked
    this.setState(obj)
  }
  handleChange = event => {
    this.setState({
      image_url: event.target.files[0]
    })
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={
            !!(
              this.props.itemValue.reducer.modelOpen === true &&
              this.props.itemValue.reducer.selectDialog === 'Crops'
            )
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
              value={this.state.name}
              onChange={event => {
                this.updateValue(event, 'name')
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Crop Weight'
              type='text'
              fullWidth
              value={this.state.wieght}
              onChange={event => {
                this.updateValue(event, 'wieght')
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Crop Price'
              type='text'
              fullWidth
              value={this.state.price}
              onChange={event => {
                this.updateValue(event, 'price')
              }}
            />
            <TextField
              id='datetime-local'
              label='Select Completion Date'
              type='date'
              defaultValue='2017-05-24'
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
              value={this.state.date}
              onChange={event => {
                this.updateValue(event, 'date')
              }}
            />

            <TextField
              onChange={this.handleChange}
              style={styles.textStyle}
              type='file'
              label='Select File'
            />
            <FormControlLabel
              label='Transport'
              style={{ float: 'right', fontSize: 24 }}
              control={
                <Checkbox
                  checked={this.state.transport}
                  onChange={event => {
                    this.updateBol(event, 'transport')
                  }}
                  value='transport'
                />
              }
            />
          </DialogContent>
          <Divider />
          <DialogActions className={classes.pointer}>
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
  // console.log(state.authReducer.currentUserData.user.id)
  // console.log(state.reducer.selectListId)
  return {
    itemValue: state,
    farmerID: state.authReducer.currentUserData.user.id,
    selectId: state.reducer.selectListId
  }
}
function mapDispatchToProps (dispatch) {
  return {
    itemValueFunc: data => {
      dispatch(openModel(data))
    },
    addCropData: data => {
      dispatch(addCropAction(data))
    },
    cropDataUpdate: data => {
      dispatch(updateCropAction(data))
    }
  }
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddCrop)
