import React, { Component } from 'react'
import croprates from '../AllData/CropRates'

import MachinerySlider from '../../Container/ProductSlider'
import FarmerProblem from '../AllData/ProblemData'
import ImgData from '../AllData/MachineryData'
import FertilizerData from '../AllData/FertilizerData'
import PesticideData from '../AllData/PesticideData'
import ProblemSlider from '../../Container/ProblemSlider'
import { connect } from 'react-redux'
import { compose } from 'redux'
import 'weather-icons/css/weather-icons.css'
import { weatherData } from '../../Container/store/action/weatherAction'
import Weather from '../../Container/Weather'

import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import MachinerData from '../AllData/MachineryDataCompany'
import { getAllProblemAction } from '../../Container/store/action/allAddItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loaderOffProcess } from '../../Container/store/action/authAction'

import classNames from 'classnames'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  getAllFertilizerAction,
  getAllPesticideAction,
  getAllMachineryAction
} from '../../Container/store/action/companyAction'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    textAlign: 'left',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
    textAlign: 'left'
  }
}))(TableCell)

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15
  },
  papper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  rootTable: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  tableCellIncrease: {
    fontSize: 20,
    lineHeight: 0
  },
  margin: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 120,
    float: 'right',
    marginBottom: 10
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  progress: {
    margin: theme.spacing.unit * 2,
    textAlign:'center'
  },
  marginTopIncrease: {
    marginTop: 130,
    // textAlign: 'center'
  }
})
class ExpertMain extends Component {
  state = {
    selectList: [],
    search: '',
    city: '',
    anchorEl: null
  }
  componentWillMount () {
    this.props.getProblemData()
    this.props.getFertilizer()
    this.props.getPesticide()
    this.props.getMachinery()
    this.props.requestWeather()
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.loaderOff()
    }, 2000)
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  onChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  onChange = event => {
    this.setState({
      city: event.target.value,
      selectList: croprates.filter(item => item.city === this.state.city)
    })
  }

  render () {
    const { classes } = this.props
    const { selectList,
      } = this.state
    let i = 0
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Weather data={this.props.weatherDetail} />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Paper className={classes.rootTable}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan='3'>
                        <Typography
                          variant='headline'
                          gutterBottom
                          style={{ fontSize: 32 }}
                        >
                          Crop Rates
                        </Typography>
                      </TableCell>

                      <TableCell colSpan='1'>
                        <FormControl className={classes.formControl}>
                          <NativeSelect
                            value={this.state.city}
                            onChange={this.onChange}
                            name='Select City'
                            className={classes.selectEmpty}
                          >
                            <option value=''>Select City</option>
                            <option value={'Karachi'}>Karachi</option>
                            <option value={'Lahore'}>Lahore</option>
                            <option value={'Hyderabad'}>Hyderabad</option>
                          </NativeSelect>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan='4'>
                        <Typography
                          variant='headline'
                          gutterBottom
                          style={{ textAlign: 'center' }}
                        >
                          {this.state.city} Market Rate's
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                      <CustomTableCell numeric>No.</CustomTableCell>
                      <CustomTableCell numeric>Name</CustomTableCell>
                      <CustomTableCell numeric>Price</CustomTableCell>
                      <CustomTableCell numeric>Weight</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectList.map((n, key) => {
                      return (
                        <TableRow className={classes.row} key={n.name}>
                          <CustomTableCell numeric>{++i}</CustomTableCell>
                          <CustomTableCell numeric>{n.name}</CustomTableCell>
                          <CustomTableCell numeric>{n.price}</CustomTableCell>
                          <CustomTableCell numeric>{n.weight}</CustomTableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column'>
              <Grid item xs>
                <Paper className={classNames(classes.paper)}>
                  {!this.props.loader ? (
                    <MachinerySlider
                      info={this.props.allCompanyData.allMachineryData}
                      allDataMac={this.props.allCompanyData.allMachineryData}
                      typeSelect='Machinery'
                    />
                  ) : (
                    <CircularProgress className={classes.progress} />
                  )}
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  {!this.props.loader ? (
                    <MachinerySlider
                      info={this.props.allCompanyData.allFertilizerData}
                      allDataFer={this.props.allCompanyData.allFertilizerData}
                      typeSelect='Fertilizer'
                    />
                  ) : (
                    <CircularProgress className={classes.progress} />
                  )}
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  {!this.props.loader ? (
                    <MachinerySlider
                      info={this.props.allCompanyData.allPesticideData}
                      allDataPes={this.props.allCompanyData.allPesticideData}
                      typeSelect='Pesticide'
                    />
                  ) : (
                    <CircularProgress className={classes.progress} />
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper className={[classes.paper,classes.marginTopIncrease]}>
              {!this.props.loader ? (
                <ProblemSlider
                  info={this.props.allProblem}
                  typeSelect='Problem'
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

function mapStateToProps (state) {
  return {
    allProblem: state.allAddedItemReducer.problemData,
    allCompanyData: state.companyReducer,
    weatherDetail: state.reducer.weatherData,
    loader: state.authReducer.authenticated
  }
}
function mapDispatchToProps (dispatch) {
  return {
    requestWeather: () => {
      dispatch(weatherData())
    },

    getProblemData: () => {
      dispatch(getAllProblemAction())
    },
    getFertilizer: () => {
      dispatch(getAllFertilizerAction())
    },
    getMachinery: () => {
      dispatch(getAllMachineryAction())
    },
    getPesticide: () => {
      dispatch(getAllPesticideAction())
    },
    loaderOff: () => {
      dispatch(loaderOffProcess())
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ExpertMain)
