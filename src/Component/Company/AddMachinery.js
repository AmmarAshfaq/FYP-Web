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
import Divider from '@material-ui/core/Divider'

class AddMachinery extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      description: '',
      price: 0,
      image: ''
    }
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
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
            />

            <TextField
              autoFocus
              margin='dense'
              id='price'
              label='Price'
              type='text'
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              id='discription'
              label='Machine Description'
              type='text'
              fullWidth
            />

          <TextField
              // onChange={this.handleChange}
              // style={styles.textStyle}
              type='file'
              label='Select File'
            />

          </DialogContent>
          <Divider />

          <DialogActions style={{ alignItems: 'center' }}>
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
var arr = []

function mapStateToProps (state) {
  // console.log(state.reducer.selectDialog)
  // arr.push(state.reducer.selectDialog)
  // console.log(arr[0].props)
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
