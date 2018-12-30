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
  constructor () {
    super()
    // this.state = {
    //   change: false
    // }
  }
  componentWillMount () {
    this.props.getAddedCrop(this.props.farmerId)
    this.props.getAddedProblem(this.props.farmerId)
  }
  // shouldComponentUpdate (nextProps) {
  //   // if(nextProps.cropList.problemArray.length > )
  //   console.log(nextProps.cropList.problemArray.length)
  //   console.log(this.props.cropList.problemArray.length)
  //   return nextProps.cropList.problemArray.length !== this.props.cropList.problemArray.length
  // }

  // componentWillReceiveProps (nextProps) {
  //   // console.log(nextProps.cropList.problemArray.length )
  //   // console.log(this.props.cropList.problemArray.length)
  //   if(nextProps.cropList.problemArray.length >this.props.cropList.problemArray.length){
  //     this.props.getAddedProblem(this.props.farmerId)
  //   }
  //   // this.setState({
  //   //   change: nextProps.cropList.problemArray.length > this.props.cropList.problemArray.length || nextProps.cropList.cropArray.length >this.props.cropList.cropArray.length
  //   // })
  // }
  render () {
    // console.log(this.props.cropList)
    // console.log(this.state.change)
    // console.log('render called')
    const { classes } = this.props
    return (
      <div style={{ marginTop: 100, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {
                
                this.props.cropList.problemArray ? (
                <TableGrid
                  data={this.props.cropList.problemArray}
                  typeSelect='Problem'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.cropList.cropArray ? (
                <TableGrid
                  data={this.props.cropList.cropArray}
                  typeSelect='Crops'
                />
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
  return {
    farmerId: state.authReducer.currentUserData.user.id,
    cropList: state.farmerReducer,
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
