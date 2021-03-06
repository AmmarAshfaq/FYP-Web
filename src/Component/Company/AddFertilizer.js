import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Alert from 'react-s-alert'
import Create from '@material-ui/icons/Create'
import AddPhoto from '@material-ui/icons/AddAPhoto'
import Divider from '@material-ui/core/Divider'

import PriceIcon from '@material-ui/icons/AttachMoney'
// import FileField from "react-material-filefield";
import InputAdornment from '@material-ui/core/InputAdornment';
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
  showAlertMessage = message => {
    Alert.error(message || 'Something is wrong', {
      position: 'bottom-right',
      effect: 'slide',
      timeout: 'none'
    })
  }
  handleSubmit = () => {
    const { name, price, productName, application, image_url } = this.state;
    if(name !== "" && price !== "" && productName !== "" && application !== "" && image_url !== null){
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
  }else{
    this.showAlertMessage("Please Insert All Data")
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
          <Divider/>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              // label='Name'
              placeholder="Fertilizer Name"
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'name')}
              value={this.state.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Create />
                  </InputAdornment>
                ),
              }}
       
           />

            {/* </TextField> */}
            {/* <div style={{position: 'relative', display: 'inline-block'}}> */}
       {/* <Create style={{position: 'absolute', left: 0, top: 10, width: 20, height: 20}}/>
       <TextField
              style={{textIndent: 30}}
              hintText="Search by Name"
              // onChange={_.debounce((event, value) => this.handleSearch(value), 500)}
        />
</div> */}
            <TextField
              autoFocus
              margin='dense'
              id='product'
              placeholder='Product Detail'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'productName')}
              value={this.state.productName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Create />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              id='application'
              placeholder='How To Use Fertilizer ?'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'application')}
              value={this.state.application}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Create />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              id='price'
              placeholder='Price'
              type='text'
              fullWidth
              onChange={event => this.updateValue(event, 'price')}
              value={this.state.price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PriceIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
          
              type='file'
              label='Select Image'
              onChange={this.updateFile}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddPhoto />
                  </InputAdornment>
                ),
              }}
            />
  
          </DialogContent>
          <Divider/>
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
