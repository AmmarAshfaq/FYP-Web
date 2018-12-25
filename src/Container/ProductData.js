import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import classnames from 'classnames'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  responseAddFertilizerAction,
  responseAddMachineryAction,
  responseAddPesticideAction
} from './store/action/companyAction'
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
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      quantity: '',
      price: ''
    }
  }
  updateValue = (event, target) => {
    let obj = {}
    obj[target] = event.target.value
    this.setState(obj)
  }
  submitForm = () => {
    const { name, email, quantity, price } = this.state
    let obj = {}

    if (this.props.allSpecificData.fertilizerProduct.name) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        _id: this.props.allSpecificData.fertilizerProduct._id,
        senderId: this.props.userId
        // type:
      }
    } else if (this.props.allSpecificData.fertilizerProduct.machineName) {
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        machineId: this.props.allSpecificData.fertilizerProduct._id,
        senderId: this.props.userId
      }
    } else if (this.props.allSpecificData.fertilizerProduct.pesticideName) {
      // console.log(obj)
      obj = {
        name: name,
        email: email,
        expectedPrice: price,
        qty: quantity,
        pesticideId: this.props.allSpecificData.fertilizerProduct._id,
        senderId: this.props.userId
      }
    }
    if (this.props.allSpecificData.fertilizerProduct.name) {
      this.props.addFertilizerResponse(obj)
    } else if (this.props.allSpecificData.fertilizerProduct.machineName) {
      this.props.addMachineryResponse(obj)
    } else if (this.props.allSpecificData.fertilizerProduct.pesticideName) {
      // console.log(obj)
      this.props.addPesticideResponse(obj)
    }

    this.setState({
      name: '',
      email: '',
      quantity: '',
      price: ''
    })
    // console.log(obj)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8} xs={12}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img
                src={
                  this.props.allSpecificData.fertilizerProduct.image_url
                    ? this.props.allSpecificData.fertilizerProduct.image_url
                    : null
                }
                alt='loading.....'
                width='300'
                height='400'
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant='headline' gutterBottom>
                {this.props.allSpecificData.fertilizerProduct.machineName
                  ? this.props.allSpecificData.fertilizerProduct.machineName.substring(
                    0,
                    15
                  )
                  : this.props.allSpecificData.fertilizerProduct.name
                    ? this.props.allSpecificData.fertilizerProduct.name.substring(
                      0,
                      15
                    )
                    : this.props.allSpecificData.fertilizerProduct.pesticideName
                      ? this.props.allSpecificData.fertilizerProduct.pesticideName.substring(
                        0,
                        15
                      )
                      : null}
              </Typography>
              <Typography variant='title' gutterBottom>
                by Company{' '}
                {this.props.allSpecificData.fertilizerProduct.companyName
                  ? this.props.allSpecificData.fertilizerProduct.companyName
                  : null}
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
              </ul>
              <Typography variant='headline' gutterBottom>
                Price
              </Typography>
              <ul>
                <li>
                  {this.props.allSpecificData.fertilizerProduct.price
                    ? this.props.allSpecificData.fertilizerProduct.price
                    : null}
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={3} wrap='nowrap'>
            <Paper className={classnames(classes.paper, classes.centerText)}>
              <Typography variant='title' style={{ textAlign: 'center' }}>
                Ask for quote and we will call you back with in 48 hours with
                the best price available on the product.
              </Typography>
              <TextField
                id='name'
                label='Name'
                value={this.state.name}
                onChange={event => this.updateValue(event, 'name')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='email'
                label='Email'
                value={this.state.email}
                onChange={event => this.updateValue(event, 'email')}
                margin='normal'
                className={classes.textFieldPad}
              />

              <TextField
                id='quantity'
                label='Quantity'
                value={this.state.quantity}
                onChange={event => this.updateValue(event, 'quantity')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <TextField
                id='expectedPrice'
                label='ExpectedPrice'
                value={this.state.price}
                onChange={event => this.updateValue(event, 'price')}
                margin='normal'
                className={classes.textFieldPad}
              />
              <Button
                variant='contained'
                color='primary'
                className={classnames(classes.button, classes.centerText)}
                onClick={() => this.submitForm()}
              >
                Submit
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant='headline'>Description: </Typography>
              <ul>
                <li>
                  {this.props.allSpecificData.fertilizerProduct
                    .machineDescription
                    ? this.props.allSpecificData.fertilizerProduct
                      .machineDescription
                    : this.props.allSpecificData.fertilizerProduct.application
                      ? this.props.allSpecificData.fertilizerProduct.application
                      : this.props.allSpecificData.fertilizerProduct
                        .pesticideDescription
                        ? this.props.allSpecificData.fertilizerProduct
                          .pesticideDescription
                        : null}
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classnames(classes.paper, classes.bottomMargin)}>
              <Typography variant='headline'>
                Product Specification:{' '}
              </Typography>
              <ul>
                <li>
                  {this.props.allSpecificData.fertilizerProduct.product
                    ? this.props.allSpecificData.fertilizerProduct.product
                    : null}
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allSpecificData: state.companyReducer,
    userId: state.authReducer.currentUserData.user.id
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addFertilizerResponse: obj => {
      dispatch(responseAddFertilizerAction(obj))
    },
    addMachineryResponse: obj => {
      dispatch(responseAddMachineryAction(obj))
    },
    addPesticideResponse: obj => {
      dispatch(responseAddPesticideAction(obj))
    }
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ProductData)
