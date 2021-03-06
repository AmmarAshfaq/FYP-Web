import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { openModel } from '../../Container/store/action/action'
import Alert from 'react-s-alert'
import Create from '@material-ui/icons/Create'
import AddPhoto from '@material-ui/icons/AddAPhoto'
import MixIcon from '@material-ui/icons/Mic'
import Typography from '@material-ui/core/Typography'

import InputAdornment from '@material-ui/core/InputAdornment'

import {
  addProblemAction,
  updateProblemAction
} from '../../Container/store/action/farmerAction'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'

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
      image: null,
      audio: null
    }
  }
  handleChange = (event, target) => {
    let obj = {}
    obj[target] = event.target.files[0]
    this.setState(obj)
  }
  updateBol = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  handleClose = () => {
    this.props.itemValueFunc(false)
  }
  showAlertMessage = message => {
    Alert.error(message || 'Something is wrong', {
      position: 'bottom-right',
      effect: 'slide',
      timeout: 'none'
    })
  }
  handleSubmit = () => {
    const { image, audio, problemName, problemDescription } = this.state
    if (
      image !== '' &&
      problemName !== '' &&
      audio !== '' &&
      problemDescription !== ''
    ) {
      const objData = {
        image,
        audio,
        problemName,
        problemDescription,
        farmerID: this.props.farmerID,
        selectId: this.props.selectId,
        type: 'Problem'
      }
      if (this.props.selectId && this.props.selectId !== undefined) {
        this.props.updateProblemData(objData)
      } else {
        this.props.addProblemDetail(objData)
      }
    } else {
      this.showAlertMessage('Please Insert Some Data!')
    }

    this.props.itemValueFunc(false)
    this.setState({
      problemName: '',
      problemDescription: '',
      image: null,
      audio: null
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
              this.props.itemValue.reducer.selectDialog === 'Problem'
            )
          }
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title' className={classes.main}>
            <Typography variant='display1' color='secondry' align='center'>
              Add Problem
            </Typography>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              placeholder='Enter Problem Name You Face'
              type='text'
              fullWidth
              value={this.state.problemName}
              onChange={event => {
                this.updateBol(event, 'problemName')
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Create />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              placeholder='Enter Problem Description'
              type='text'
              fullWidth
              value={this.state.problemDescription}
              onChange={event => {
                this.updateBol(event, 'problemDescription')
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Create />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              onChange={event => {
                this.handleChange(event, 'image')
              }}
              style={styles.textStyle}
              type='file'
              label='Select Image'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AddPhoto />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              onChange={event => {
                this.handleChange(event, 'audio')
              }}
              style={styles.textStyle}
              type='file'
              label='Select Audio'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MixIcon />
                  </InputAdornment>
                )
              }}
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
    addProblemDetail: data => {
      dispatch(addProblemAction(data))
    },
    updateProblemData: data => {
      dispatch(updateProblemAction(data))
    }
  }
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddProblem)
