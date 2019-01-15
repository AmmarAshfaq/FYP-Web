import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {storeDataForMsg} from '../../Container/store/action/companyAction'
import {browserHistory} from 'react-router'
import Background from '../../images/theme.png'

const styles = theme => ({
  parentRoot: {
    marginTop: 1,
    padding: 1,
    backgroundImage: `url(${Background})`
  },
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginBottom: 20,
    opacity:0.9
  }
})
class CompanyResponse extends Component {
  submitData = data => {
    this.props.storeMsg(data)
    browserHistory.push('/messenger')
    
  }
  render () {
    let arrMerge1 = this.props.allCompanyResponse.pesticideArray.concat(
      this.props.allCompanyResponse.machineryArray
    )
    let arrMerge2 = arrMerge1.concat(
      this.props.allCompanyResponse.fertilizerArray
    )
    let arrSort = [];
    arrMerge2.filter(item => {
      item.response.map(value => {
        if (value._id) {
          arrSort.push(item)
        } else {
          console.log('No record ')
        }
      })
    })
    let unique = [...new Set(arrSort)]
    console.log(unique)

    const { classes } = this.props

    return (
      <div className={classes.parentRoot}>
      <div className={classes.root}>
        <Grid container spacing={12}>
          {unique.map(item => (
            <Grid item xs={12} container>
              <Grid item xs={2} />
              <Grid item xs={8} container>
                <Paper className={classes.paper}>
                  <Grid item xs container direction='row' spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom component='h2' variant='h1'>
                        Product Detail
                      </Typography>
                      <Typography gutterBottom>
                        {`Name:  ${
                          item.pesticideName
                            ? item.pesticideName.substring(0, 15)
                            : item.machineName
                              ? item.machineName.substring(0, 15)
                              : item.name
                                ? item.name.substring(0, 15)
                                : null
                        }`}
                      </Typography>
                      <Typography gutterBottom>
                        {`Price: ${item.price.substring(0, 15)}`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>
                      </Typography>
                    </Grid>
                    <Grid item xs container direction='column' spacing={16}>
                      {item.response.map(value => (
                        <Fragment>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              component='h2'
                              variant='h1'
                            >
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
                    <Grid item xs>
                      <Typography gutterBottom component='h2' variant='h1'>
                        Product Image
                      </Typography>
                      <img src={item.image_url} width='400' height='200' alt="loading.."/>
                    </Grid>
                    <Grid item>
                      <Typography style={{ cursor: 'pointer' }}>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          ))}
        </Grid>
      </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    allCompanyResponse: state.companyReducer
  }
}
function mapDispatchToProps(dispatch){
  return {
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
)(CompanyResponse)
