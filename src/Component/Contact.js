import React, { Component } from 'react'
import { Paper, Typography, Grid, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Alert from 'react-s-alert'

// import Background from '../images/contact.jpg'
import {
  changeNavbar,
  emailSendAction,
  emailSuccessEmpty
} from '../Container/store/action/authAction'
import { compose } from 'redux'
import Background from '../images/theme.png'
import { connect } from 'react-redux'
const styles = theme => ({
  root: {
    marginTop: 80,
    backgroundImage:`url(${Background})`,

    // flexGrow: 1
  },
  paperStyle: {}
})

const userType = [
  {
    value: 'Buyer'
  },
  {
    value: 'Farmer'
  },
  {
    value: 'Company'
  },
  {
    value: 'Expert'
  }
]
const userClass = [
  {
    value: 'Karachi'
  },
  {
    value: 'Lahore'
  },
  {
    value: 'Hyderabad'
  },
  {
    value: 'Multan'
  },
  {
    value: 'Peshawar'
  },
  {
    value: 'Islamabad'
  },
  {
    value: 'Sukkur'
  },
  {
    value: 'Quetta'
  }
]
const knowingInfo = [
  {
    value: 'Friend/Family'
  },
  {
    value: 'Search Engine'
  },
  {
    value: 'Event'
  },
  {
    value: 'Flyer or Newsletter'
  },
  {
    value: 'Other'
  }
]

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      name: '',
      type: 'Farmer',
      city: 'Karachi',
      information: 'Search Engine',
      comment: '',
      phonenumber: ''
    }
  }
  
  fieldUpdate = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }
  handleError () {
    this.props.emailEmpty()
  }
  showAlertMessage = message => {
    if (message.success === 'false') {
      Alert.error(message.message || 'Something is wrong', {
        position: 'bottom-right',
        effect: 'slide',
        timeout: 'none',
        onClose: this.handleError()
      })
    } else if (message.success === 'true') {
      Alert.success(message.message || 'Message Send successfully', {
        position: 'bottom-right',
        effect: 'slide',
        timeout: 'none',
        onClose: this.handleError()
      })
    } else {
      Alert.error(message || 'Something is wrong', {
        position: 'bottom-right',
        effect: 'slide',
        timeout: 'none'
      })
    }
  }
  handleSubmit = () => {
    let {
      email,
      name,
      type,
      city,
      information,
      comment,
      phonenumber
    } = this.state
    let obj = {}
    if (
      email !== '' &&
      type !== '' &&
      name !== '' &&
      city !== '' &&
      information !== '' &&
      comment !== '' &&
      phonenumber !== ''
    ) {
      obj = {
        email: email,
        type: type,
        name: name,
        city: city,
        information: information,
        comment: comment,
        phonenumber: phonenumber
      }
      this.props.sendData(obj)
    } else {
      // console.log('error')
      this.showAlertMessage('Data Badly Format Or Please Insert All Data')
    }
    // console.log(this.state)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container style={{ padding: 10 }}>
          <Grid item xs={12}>
            <Typography
              variant='display1'
              gutterBottom
              style={{ textAlign: 'center' }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant='display1'
              gutterBottom
              style={{ textAlign: 'center' }}
            >
              ---- * ----
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <div style={{ marginLeft: 60 }}>
              <Typography
                variant='headline'
                gutterBottom
                style={{ textAlign: 'left', marginBottom: 20 }}
              >
                Karachi Pakistan
              </Typography>
              <Typography
                variant='subheading'
                gutterBottom
                style={{ textAlign: 'left', lineHeight: '1em' }}
              >
                {/* 368 Qasimabad, */}xxxxxxxxxx
              </Typography>
              <Typography
                variant='subheading'
                gutterBottom
                style={{
                  textAlign: 'left',
                  lineHeight: '1em',
                  marginBottom: 30
                }}
              >
                {/* Liaquatabad Karachi */} xxxxxxxxxxxxxxxxx
              </Typography>
              <Typography
                variant='headline'
                gutterBottom
                style={{ textAlign: 'left', marginBottom: 20 }}
              >
                Phone
              </Typography>
              <Typography
                variant='subheading'
                gutterBottom
                style={{
                  textAlign: 'left',
                  lineHeight: '1em',
                  marginBottom: 30
                }}
              >
                Karachi: 03412828273
              </Typography>
              <Typography
                variant='headline'
                gutterBottom
                style={{ textAlign: 'left', marginBottom: 20 }}
              >
                Email
              </Typography>
              <Typography
                variant='subheading'
                gutterBottom
                style={{ textAlign: 'left', lineHeight: '1em' }}
              >
                smartagricultureservices@gmail.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ marginRight: 60, padding: 30 }}>
              <TextField
                id='name'
                label='Name'
                value={this.state.name}
                onChange={event => this.fieldUpdate(event, 'name')}
                margin='normal'
                style={{ width: '65%', marginRight: 35 }}
                type='name'
              />
              <TextField
                id='select-currency-native'
                select
                label='Select Value'
                value={this.state.type}
                onChange={event => this.fieldUpdate(event, 'type')}
                type='text'
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin='normal'
                style={{ width: '25%' }}
              >
                {userType.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id='name'
                label='Email'
                // className={classes.textField}
                value={this.state.email}
                onChange={event => this.fieldUpdate(event, 'email')}
                margin='normal'
                fullWidth
                type='email'
              />
              <TextField
                id='select-currency-native'
                select
                label='City'
                className={classes.textField}
                value={this.state.city}
                onChange={event => this.fieldUpdate(event, 'city')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText='Please select'
                style={{ width: '25%' }}
                margin='normal'
                type='text'
              >
                {userClass.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id='name'
                label='Phone'
                value={this.state.phonenumber}
                onChange={event => this.fieldUpdate(event, 'phonenumber')}
                margin='normal'
                style={{ width: '65%', marginLeft: 45 }}
                type='text'
              />
              <TextField
                id='select-currency-native'
                select
                label='Country'
                className={classes.textField}
                value={this.state.information}
                onChange={event => this.fieldUpdate(event, 'information')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText='Please select'
                margin='normal'
                fullWidth
                type='text'
              >
                {knowingInfo.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id='multiline-static'
                label='Multiline'
                multiline
                rows='4'
                margin='normal'
                fullWidth
                value={this.state.comment}
                onChange={event => this.fieldUpdate(event, 'comment')}
                type='text'
              />
              <Button
                variant='contained'
                size='medium'
                color='primary'
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
              {this.props.success.success === 'true'
                ? // <p>{alert(this.props.success.message)}</p>
                this.showAlertMessage(this.props.success)
                : this.showAlertMessage(this.props.success)}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    changeRoutes: obj => {
      dispatch(changeNavbar(obj))
    },
    sendData: obj => {
      dispatch(emailSendAction(obj))
    },
    emailEmpty: () => {
      dispatch(emailSuccessEmpty())
    }
  }
}
function mapStateToProps (state) {
  return {
    success: state.authReducer.emailData
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Contact)
