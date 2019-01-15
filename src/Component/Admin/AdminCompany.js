import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import TableGrid from '../../Container/TableGrid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MachineryDataCompany from '../AllData/MachineryDataCompany'
import PesticideCompanyData from '../AllData/PesticideCompanyData'
import CircularProgress from '@material-ui/core/CircularProgress'

import FertilizerDataCompany from '../AllData/FertilizerDataCompany'
import {
  getAllFertilizerAction,
  getAllPesticideAction,
  getAllMachineryAction
} from '../../Container/store/action/companyAction'
import Background from '../../images/theme.png'

class AdminCompany extends Component {
  componentWillMount () {
  
    this.props.getFertilizerData()
    this.props.getMachineryData()
    this.props.getPesticideData()
  }
  render () {
    const { classes } = this.props
    return (
      <div style={{ marginTop: 1,
        padding: 1,
        backgroundImage: `url(${Background})`}}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.allMachineryData ? (
                <TableGrid
                  data={this.props.companyAddList.allMachineryData}
                  typeSelect='Machinery'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.allFertilizerData ? (
                <TableGrid
                  data={this.props.companyAddList.allFertilizerData}
                  typeSelect='Fertilizer'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.companyAddList.allPesticideData ? (
                <TableGrid
                  data={this.props.companyAddList.allPesticideData}
                  typeSelect='Pesticide'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
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
    color: theme.palette.text.secondary,
    opacity:0.9
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})
function mapDispatchToProps (dispatch) {
  return {
    getFertilizerData: () => {
      dispatch(getAllFertilizerAction())
    },
    getMachineryData: () => {
      dispatch(getAllMachineryAction())
    },
    getPesticideData: () => {
      dispatch(getAllPesticideAction())
    }
  }
}
function mapStateToProps (state) {
  return {
    companyID: state.authReducer.currentUserData.user,
    companyAddList: state.companyReducer
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(AdminCompany)
