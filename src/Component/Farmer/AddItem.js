import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/FarmerTableGrid'
import { withStyles } from '@material-ui/core/styles'


import FarmerProblemData from '../AllData/FarmerProblemData'
import FarmerCropData from '../AllData/FarmerCropData'
class AddedItem extends Component {

  render () {
    // console.log(MachineryDataCompany,"Machinery");
    const { classes } = this.props
    return (
      <div style={{ marginTop: 100 }}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid data={FarmerProblemData} typeSelect="Problem"/></Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid data={FarmerCropData} typeSelect="Crops"/></Paper>

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
  }
})

export default  withStyles(styles)(AddedItem);

