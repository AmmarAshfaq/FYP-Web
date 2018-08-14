import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/TableGrid'
import { withStyles } from '@material-ui/core/styles'
class CompanyMain extends Component {
  render () {
    const { classes } = this.props
    return (
      <div style={{ marginTop: 100 }}>
        <Grid container >
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid /></Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid /></Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid /></Paper>

          </Grid>
        </Grid>

      </div>
    )
  }
}

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  textDec: {
    textAlign: 'center'
  },
  paper: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})
export default withStyles(styles)(CompanyMain)
