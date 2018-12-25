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
import {
  addMachineryAction,
  updateMachineryAction
} from '../../Container/store/action/companyAction'

import Divider from '@material-ui/core/Divider'

class AddMachinery extends Component {
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
    // let obj = {}
    // obj[target] = event.target.files[0]
    this.setState({
      image: event.target.files[0]
    })
  }
  handleSubmit = () => {
    const { name, price, description, image } = this.state
    // console.log(this.state)
    // console.log(this.state)
    let obj = {
      name,
      price,
      description,
      image,
      companyDetails: {
        contactEmail: this.props.companyInfo.email,
        contactNumber: '00000000000000000000000000000000000000000',
        contactName: this.props.companyInfo.name,
        location: '368000000000000000000000000000000000',
        address: '000000000000000000000000000000000000000000'
      },
      companyName: this.props.companyInfo.name,
      companyId: this.props.companyInfo.id,
      selectId: this.props.selectId
    }
    console.log(obj)
    if (this.props.selectId && this.props.selectId !== undefined) {
      // console.log(obj)
      this.props.updateItem(obj)
    } else {
      this.props.addItem(obj)
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
    //          var obj = this.props.itemValue.reducer.selectDialog;
    //          console.log(obj)
    //       //    obj.props.typeSelect == null && obj.props.typeSelect == undefined ?

    //       //  null
    //       //    :obj= obj.props.typeSelect;
    //       //    console.log(obj)
    //         //  var objVal = {};
    //         //  objVal["data"]=obj
    //         //  console.log(objVal)
    //         //  console.log(Object.keys(objVal))
    // // var obj = {};
    // // obj["selectValue"] = this.props.itemValue.reducer.selectDialog.props
    // // console.log(obj.selectValue)

    //     // var arr = [];
    //     // arr.push();
    //     // console.log(arr[0].props)
    //     // var obj = {};
    //     // obj
    return (
      <div>
        <Dialog
          open={
            this.props.itemValue.reducer.modelOpen === true &&
            this.props.itemValue.reducer.selectDialog === 'Machinery'
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            <Typography variant='display1' color='secondry' align='center'>
              Add Machinery Detail
            </Typography>
          </DialogTitle>
          <Divider />

          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Machine Name'
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
              label='Machine Description'
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
  // console.log(state.reducer.selectDialog)
  // arr.push(state.reducer.selectDialog)
  // console.log(arr[0].props)
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
      dispatch(addMachineryAction(data))
    },
    updateItem: data => {
      dispatch(updateMachineryAction(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMachinery)
