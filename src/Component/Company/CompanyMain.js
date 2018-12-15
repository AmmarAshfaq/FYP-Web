import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { browserHistory } from 'react-router'
import TableGrid from '../../Container/TableGrid'
import { withStyles } from '@material-ui/core/styles'
// import { changeNavbar } from '../../Container/store/action/action'
import { connect } from 'react-redux';
import { compose } from 'redux';
import MachineryDataCompany from '../AllData/MachineryDataCompany';
import PesticideCompanyData from '../AllData/PesticideCompanyData';
import FertilizerDataCompany from '../AllData/FertilizerDataCompany';

class CompanyMain extends Component {
  // componentWillMount () {
  //   this.props.changeAppbar('CompanyHome')
  // }
  render () {
    console.log(MachineryDataCompany,"Machinery");
    const { classes } = this.props
    return (
      <div 
      className={classes.root}
      // style={{ marginTop: 100 }}
      >
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid data={MachineryDataCompany} typeSelect="Machinery"/></Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid data={FertilizerDataCompany} typeSelect="Fertilizer"/></Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TableGrid data={PesticideCompanyData} typeSelect="Pesticide"/></Paper>

          </Grid>
        </Grid>

      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:100
  },
  paper: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})
function mapDispatchToProps (dispatch) {
  return {
    // changeAppbar: (obj) => {
    //   dispatch(changeNavbar(obj))
    // }
  }
}
export default compose(connect(null, mapDispatchToProps), withStyles(styles))(
  CompanyMain
)
