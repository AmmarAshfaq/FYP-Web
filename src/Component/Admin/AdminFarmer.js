import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import TableGrid from '../../Container/FarmerTableGrid'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import {
//   getCropAddData,
//   getProblemAddData
getAllCropAction,
getAllProblemAction
} from '../../Container/store/action/allAddItem'

import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import FarmerProblemData from '../AllData/FarmerProblemData'
import FarmerCropData from '../AllData/FarmerCropData'
class AdminFarmer extends Component {
 
  componentWillMount () {
    // this.props.getAddedCrop(this.props.farmerId)
    // this.props.getAddedProblem(this.props.farmerId)
    this.props.getAllCrop()
    this.props.getAllProblem()
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
 
    const { classes } = this.props
    return (
      <div style={{ marginTop: 100, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {
                
                this.props.allProblem ? (
                <TableGrid
                  data={this.props.allProblem}
                  typeSelect='Problem'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.cropArr ? (
                <TableGrid
                  data={this.props.cropArr}
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
    // farmerId: state.authReducer.currentUserData.user.id,
    cropList: state.farmerReducer,
    cropArr: state.allAddedItemReducer.cropData,
    allProblem: state.allAddedItemReducer.problemData,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    // getAddedCrop: obj => {
    //   dispatch(getCropAddData(obj))
    // },
    // getAddedProblem: obj => {
    //   dispatch(getProblemAddData(obj))
    // }
    getAllCrop:()=>{
        dispatch(getAllCropAction())
    },
    getAllProblem:()=>{
        dispatch(getAllProblemAction())
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AdminFarmer)
