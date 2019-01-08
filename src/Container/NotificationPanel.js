import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Button from '@material-ui/core/Button'
import {storeDataForMsg} from '../Container/store/action/companyAction'
import {browserHistory} from 'react-router'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
  }
})

class NotificationPanel extends Component {
    submitData = data => {
        this.props.storeMsg(data)
        browserHistory.push('/messenger')
        
      }
  render () {
    const { classes, notificationResponse } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} direction='column'>
            <Paper className={classes.paper}>
              <Grid item xs container direction='row' spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom component='h2' variant='h1'>
                    Product Detail
                  </Typography>
                  <Typography gutterBottom>
                    {`Name:  ${
                      notificationResponse.pesticideName
                        ? notificationResponse.pesticideName.substring(0, 15)
                        : notificationResponse.machineName
                          ? notificationResponse.machineName.substring(0, 15)
                          : notificationResponse.name
                            ? notificationResponse.name.substring(0, 15)
                            : null
                    }`}
                  </Typography>
                  <Typography gutterBottom>
                    {`Price: ${notificationResponse.price.substring(0, 15)}`}
                  </Typography>
                </Grid>
                <Grid item>
                  {/* <Typography style={{ cursor: 'pointer' }}>
                      </Typography> */}
                </Grid>
                <Grid item xs>
                  <Typography gutterBottom component='h2' variant='h1'>
                    Product Image
                  </Typography>
                  <img
                    src={notificationResponse.image_url}
                    width='400'
                    height='200'
                    alt='loading..'
                  />
                </Grid>
                <Grid item xs container direction='column' spacing={16}>
                  <Typography gutterBottom component='h2' variant='h1'>
                    Response Detail
                  </Typography>
                  {notificationResponse.response.map(value => (
                    <Fragment>
                      <Grid item xs>
                        <Typography gutterBottom component='h2' variant='h1'>
                          Response Detail
                        </Typography>
                        <Typography gutterBottom>
                          {`Name: ${value.name}`}
                        </Typography>
                        <Typography gutterBottom>
                          {`Qunatity: ${value.qty}`}
                        </Typography>
                        <Typography gutterBottom>
                          {`Expected Price: ${value.expectedPrice}`}
                        </Typography>
                        <Typography gutterBottom>
                          {`Email: ${value.email}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          color='primary'
                          className={classes.button}
                          onClick={() => this.submitData(value)}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>

                <Grid item>
                  <Typography style={{ cursor: 'pointer' }} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    notificationResponse: state.companyReducer.notificationResponse
  }
}
function mapDispatchToProps(dispatch){
    return{
        storeMsg: (data)=>{
            dispatch(storeDataForMsg(data))
          }
    }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(NotificationPanel)
