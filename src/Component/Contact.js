import React, { Component } from 'react'
import { Paper, Typography, Grid, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import Background from '../images/contact.jpg'
const styles = theme => ({
  root: {
    marginTop: 80
    // flexGrow: 1
  },
  paperStyle: {}
})
class Contact extends Component {
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
                368 Qasimabad,
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
                Liaquatabad Karachi
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
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                style={{ width: '65%', marginRight: 35 }}
              />
              <TextField
                id='select-currency-native'
                select
                label='Buyer'
                // className={classes.textField}
                // value={this.state.currency}
                // onChange={this.handleChange('currency')}
                // SelectProps={{
                //   native: true,
                //   MenuProps: {
                //     className: classes.menu,
                //   },
                // }}
                // helperText='Please select your currency'
                margin='normal'
                style={{ width: '25%' }}
              >
                {/* {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
              </TextField>
              <TextField
                id='name'
                label='Email'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                fullWidth
              />
              <TextField
                id='select-currency-native'
                select
                label='Country'
                // className={classes.textField}
                // value={this.state.currency}
                // onChange={this.handleChange('currency')}
                // SelectProps={{
                //   native: true,
                //   MenuProps: {
                //     className: classes.menu,
                //   },
                // }}
                // helperText='Please select'
                style={{ width: '25%' }}
                margin='normal'
              >
                {/* {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
              </TextField>
              <TextField
                id='name'
                label='Phone'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                style={{ width: '65%', marginLeft: 45 }}
              />
              <TextField
                id='select-currency-native'
                select
                label='How did you hear about us?'
                // className={classes.textField}
                // value={this.state.currency}
                // onChange={this.handleChange('currency')}
                // SelectProps={{
                //   native: true,
                //   MenuProps: {
                //     className: classes.menu,
                //   },
                // }}
                helperText='Please select answer'
                margin='normal'
                fullWidth
              >
                {/* {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
              </TextField>
              <TextField
                id='multiline-static'
                label='Multiline'
                multiline
                rows='4'
                // defaultValue='Default Value'
                // className={classes.textField}
                margin='normal'
                fullWidth
              />
              <Button variant='contained' size='medium' color='primary'>
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Contact)
