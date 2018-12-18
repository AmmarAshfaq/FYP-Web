import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/TableGrid'
import { withStyles } from '@material-ui/core/styles'
// import { changeNavbar } from '../../Container/store/action/action'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MachineryDataCompany from '../AllData/MachineryDataCompany'
import PesticideCompanyData from '../AllData/PesticideCompanyData'
import CircularProgress from '@material-ui/core/CircularProgress'

import FertilizerDataCompany from '../AllData/FertilizerDataCompany'
import {
  getFertilizerAction,
  getMachineryAction,
  getPesticideAction
} from '../../Container/store/action/companyAction'

class CompanyMain extends Component {
  componentWillMount () {
    // this.props.changeAppbar('CompanyHome')
    this.props.getFertilizerData(this.props.companyID.id)
    this.props.getMachineryData(this.props.companyID.id)
    this.props.getPesticideData(this.props.companyID.id)
  }
  render () {
    // console.log(MachineryDataCompany,"Machinery");
    const { classes } = this.props
    return (
      <div
        className={classes.root}
        // style={{ marginTop: 100 }}
      >
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.machineryArray ? (
                <TableGrid data={this.props.companyAddList.machineryArray} typeSelect='Machinery' />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.fertilizerArray ? (
                <TableGrid
                  data={this.props.companyAddList.fertilizerArray}
                  typeSelect='Fertilizer'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.pesticideArray ? (
                <TableGrid 
                data={this.props.companyAddList.pesticideArray} 
                typeSelect='Pesticide' />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid> 
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})
function mapDispatchToProps (dispatch) {
  return {
    // changeAppbar: (obj) => {
    //   dispatch(changeNavbar(obj))
    // }
    getFertilizerData: data => {
      dispatch(getFertilizerAction(data))
    },
    getMachineryData: data => {
      dispatch(getMachineryAction(data))
    },
    getPesticideData: data => {
      dispatch(getPesticideAction(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    companyID: state.authReducer.currentUserData.user,
    companyAddList: state.companyReducer
    // machineryData:state.companyReducer.machineryArray,
    // pesticideData:state.companyReducer.pesticideArray
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(CompanyMain)
