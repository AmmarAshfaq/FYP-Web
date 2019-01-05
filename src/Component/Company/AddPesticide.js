import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'
import Divider from '@material-ui/core/Divider'
import {
  addPesticideAction,
  updatePesticideAction
} from '../../Container/store/action/companyAction'
import Alert from 'react-s-alert'

class AddPesticide extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      price: '',
      image: null
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
  updateFile = event => {
    this.setState({
      image: event.target.files[0]
    })
  }
  showAlertMessage = message => {
    Alert.error(message || 'Something is wrong', {
      position: 'bottom-right',
      effect: 'slide',
      timeout: 'none'
    })
  }

  handleSubmit = () => {
    const { name, price, description, image } = this.state
    if (name !== '' && price !== '' && description !== '' && image !== null) {
      let obj = {
        name,
        price,
        description,
        image,
        companyDetails: {
          contactEmail: this.props.companyInfo.email,
          contactNumber: '000000000000000000000000000000',
          contactName: this.props.companyInfo.name,
          location: '36800000000000000000000000000000',
          address: '0000000000000000000000000000000000000'
        },
        companyName: this.props.companyInfo.name,
        companyId: this.props.companyInfo.id,
        selectId: this.props.selectId
      }
      console.log(obj)
      if (this.props.selectId && this.props.selectId !== undefined) {
        this.props.updateItem(obj)
      } else {
        this.props.itemAdd(obj)
      }
    } else {
      this.showAlertMessage('Please Insert All Data')
    }
    this.props.itemValueFunc(false)
    this.setState({
      name: '',
      price: '',
      description: '',
      image: null
    })
  }
  render () {
    return (
      <div>
        <Dialog
          open={
            this.props.itemValue.reducer.modelOpen === true &&
            this.props.itemValue.reducer.selectDialog === 'Pesticide'
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            <Typography variant='display1' color='secondry' align='center'>
              Add Pesticide Detail
            </Typography>
          </DialogTitle>
          <Divider />

          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Pesticide Name'
              type='text'
              fullWidth
              value={this.state.name}
              onChange={event => this.updateValue(event, 'name')}
            />

            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Price'
              type='text'
              fullWidth
              value={this.state.price}
              onChange={event => this.updateValue(event, 'price')}
            />
            <TextField
              autoFocus
              margin='dense'
              id='discription'
              label='Pesticide Description'
              type='text'
              fullWidth
              value={this.state.description}
              onChange={event => this.updateValue(event, 'description')}
            />

            <TextField
              // onChange={this.handleChange}
              // style={styles.textStyle}
              type='file'
              label='Select File'
              onChange={this.updateFile}
            />
          </DialogContent>
          <Divider />

          <DialogActions style={{ alignItems: 'center' }}>
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
    itemAdd: data => {
      dispatch(addPesticideAction(data))
    },
    updateItem: data => {
      dispatch(updatePesticideAction(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPesticide)
