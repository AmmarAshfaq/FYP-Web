import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/TableGrid'
import { withStyles } from '@material-ui/core/styles'
import { changeNavbar } from '../../Container/store/action/action'
import { connect } from 'react-redux'
import { compose } from 'redux'
class CompanyMain extends Component {
  componentWillMount () {
    this.props.changeAppbar('CompanyHome')
  }
  render () {
    const { classes } = this.props
    return (
      <div style={{ marginTop: 100 }}>
        <Grid container>
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
function mapDispatchToProps (dispatch) {
  return {
    changeAppbar: (obj) => {
      dispatch(changeNavbar(obj))
    }
  }
}
export default compose(connect(null, mapDispatchToProps), withStyles(styles))(
  CompanyMain
)
