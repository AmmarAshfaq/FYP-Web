import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/FarmerTableGrid'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import {
  getCropAddData,
  getProblemAddData
} from '../../Container/store/action/farmerAction'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import FarmerProblemData from '../AllData/FarmerProblemData'
import FarmerCropData from '../AllData/FarmerCropData'
class AddedItem extends Component {
  componentWillMount () {
    // this.props.getAddedCrop(this.props.farmerId,localStorage.getItem('token'))
    // this.props.getAddedProblem(this.props.farmerId,localStorage.getItem('token'))
  // console.log(this.props.farmerId)
    this.props.getAddedCrop(this.props.farmerId)
    this.props.getAddedProblem(this.props.farmerId)
  }

  render () {

    const { classes } = this.props
    return (
      <div style={{ marginTop: 100 ,flexGrow:1 }}>
        <Grid container spacing={24}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>
              {/* {this.props.cropList ? ( */}
                 {FarmerProblemData.name?(
                <CircularProgress className={classes.progress} />
              ) : (
                <TableGrid
                data={FarmerProblemData}
                  // data={this.props.cropList.problemArray}
                  typeSelect='Problem'
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* {this.props.cropList ? ( */}
                {FarmerCropData.name?(
                <CircularProgress className={classes.progress} />
              ) : (
                <TableGrid
                data={FarmerCropData}
                  // data={this.props.cropList.cropArray}
                  typeSelect='Crops'
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

function mapStateToProps (state) {
  // console.log(state)
  return {
    farmerId: state.authReducer.currentUserData.user.id,
    cropList: state.farmerReducer
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getAddedCrop: obj => {
      dispatch(getCropAddData(obj))
    },
    getAddedProblem: obj => {
      dispatch(getProblemAddData(obj))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddedItem)
