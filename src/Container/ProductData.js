import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import classnames from 'classnames'
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: 'center',
    color: theme.palette.text.secondary
  },
  textFieldPad: {
    margin: '10px 30px 10px 30px',
    width: '80%'
  },
  button: {
    margin: theme.spacing.unit
  },
  centerText: {
    textAlign: 'center'
  },
  bottomMargin: {
    marginBottom: 20
  }
})
class ProductData extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8} xs={12}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src={require('../images/Machinery/tractor1.jpg')}
                alt='loading.....'
                width='300'
                height='400'
              />
            </Paper>

          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant='headline' gutterBottom>
                Title
              </Typography>
              <Typography variant='title' gutterBottom>
                by Company
              </Typography>
              <hr />
              <Typography variant='headline' gutterBottom>
                Features
              </Typography>
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />

              </ul>
            </Paper>

          </Grid>
          <Grid item xs={3} wrap='nowrap'>
            <Paper className={classnames(classes.paper, classes.centerText)}>
              <Typography variant='title' style={{ textAlign: 'center' }}>
                Ask for quote and we will call you back with in 48 hours with the best price available on the product.
              </Typography>
              <TextField
                id='name'
                label='Name'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='email'
                label='Email'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='phone'
                label='Phone'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='pincode'
                label='Pincode'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='quantity'
                label='Quantity'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='expectedPrice'
                label='ExpectedPrice'
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <Button
                variant='contained'
                color='primary'
                className={classnames(classes.button, classes.centerText)}
              >
                Submit
              </Button>
            </Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant='headline'>
                Description:{' '}
              </Typography>
              <ul>
                <li />
                <li />
                <li />
                <li />

              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12}>       
            <Paper className={classnames(classes.paper, classes.bottomMargin)}>
              <Typography variant='headline'>
                Product Specification:{' '}
              </Typography>
              <ul>
                <li />
                <li />
                <li />
                <li />

              </ul>
            </Paper>
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ProductData)
