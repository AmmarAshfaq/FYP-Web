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
import Background from '../../images/theme.png'

import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import MachinerData from '../AllData/MachineryDataCompany'
import { getAllProblemAction } from '../../Container/store/action/allAddItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loaderOffProcess } from '../../Container/store/action/authAction'
import { getAllCityList } from '../../Container/store/action/farmerAction'
import CropRates from '../../Container/CropRates'

import classNames from 'classnames'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Typography
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
  parentRoot: {
    marginTop: 1,
    padding: 1,
    backgroundImage: `url(${Background})`
  },
  root: {
    marginTop: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    opacity: 0.9
  },
  papper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  rootTable: {
    width: '100%',
    overflowX: 'auto',
    height:900,

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
    textAlign: 'center'
  },
  marginTopIncrease: {
    marginTop: 20
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
    setTimeout(() => {
      this.props.getLit()
    }, 3000)
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
    const { selectList } = this.state
    let i = 0
    return (
      <div className={classes.parentRoot}>
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
                <CropRates list={this.props.cityList} />
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
            <Paper className={[classes.paper, classes.marginTopIncrease]}>
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
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allProblem: state.allAddedItemReducer.problemData,
    allCompanyData: state.companyReducer,
    weatherDetail: state.reducer.weatherData,
    loader: state.authReducer.authenticated,
    cityList: state.farmerReducer.cityList
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
    },
    getLit: () => {
      dispatch(getAllCityList())
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
