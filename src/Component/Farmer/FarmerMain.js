import React, { Component } from 'react'
import MachinerySlider from '../../Container/ProductSlider'
import ProblemData from '../AllData/ProblemData'
import ImgData from '../AllData/MachineryDataCompany'
import FertilizerData from '../AllData/FertilizerData'
import PesticideData from '../AllData/PesticideData'
import ProblemSlider from '../../Container/ProblemSlider'
import { connect } from 'react-redux'
import { compose } from 'redux'
import 'weather-icons/css/weather-icons.css'
import { weatherData } from '../../Container/store/action/weatherAction'
import CropRates from '../../Container/CropRates'
import Weather from '../../Container/Weather'
import { loaderOffProcess } from '../../Container/store/action/authAction'
import Loader from 'react-loader-spinner'
import { getAllCityList } from '../../Container/store/action/farmerAction'

import {
  getAllFertilizerAction,
  getAllPesticideAction,
  getAllMachineryAction
} from '../../Container/store/action/companyAction'
import {
  getCropAddData,
  getProblemAddData
} from '../../Container/store/action/farmerAction'
import Background from '../../images/theme.png'

import classNames from 'classnames'

import { Paper, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
    color: theme.palette.text.secondary,
    opacity: 0.9
  },
  rootTable: {
    width: '100%',
    overflowX: 'auto',
    height: 900,
    opacity: 0.9
  },

  tableCellIncrease: {
    fontSize: 20,
    lineHeight: 0
  },
  weatherTable: {
    height: 50
  },

  margin: {
    margin: theme.spacing.unit
  },

  progress: {
    margin: theme.spacing.unit * 2
  },
  marginTopIncrease: {
    marginTop: 20
    // textAlign: 'center'
  },
  tableSize: {
    height: 300
  }
})
class FarmerMain extends Component {
  state = {
    search: '',
    anchorEl: null
  }
  componentWillMount () {
    this.props.getAddedCrop(this.props.farmerId)
    this.props.getAddedProblem(this.props.farmerId)
    this.props.requestWeather()
    this.props.getFertilizer()
    this.props.getPesticide()
    this.props.getMachinery()
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.loaderOff()
    }, 2000)
    setTimeout(() => {
      this.props.getLit()
    }, 3000)
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { classes } = this.props
    const { selectList } = this.state
    return (
      <div className={classes.parentRoot}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Weather data={this.props.weatherDetail} />

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
                    <div style={{ textAlign: 'center' }}>
                      {!this.props.loader ? (
                        <MachinerySlider
                          info={this.props.allCompanyData.allMachineryData}
                          allDataMac={
                            this.props.allCompanyData.allMachineryData
                          }
                          typeSelect='Machinery'
                        />
                      ) : (
                        <Loader
                          type='Oval'
                          color='#000'
                          height={50}
                          width={50}
                        />
                      )}
                    </div>
                  </Paper>
                  <Paper className={classNames(classes.paper)}>
                    <div style={{ textAlign: 'center' }}>
                      {!this.props.loader ? (
                        <MachinerySlider
                          info={this.props.allCompanyData.allFertilizerData}
                          allDataFer={
                            this.props.allCompanyData.allFertilizerData
                          }
                          typeSelect='Fertilizer'
                        />
                      ) : (
                        <Loader
                          type='Oval'
                          color='#000'
                          height={50}
                          width={50}
                        />
                      )}
                    </div>
                  </Paper>
                  <Paper className={classNames(classes.paper)}>
                    <div style={{ textAlign: 'center' }}>
                      {!this.props.loader ? (
                        <MachinerySlider
                          info={this.props.allCompanyData.allPesticideData}
                          allDataPes={
                            this.props.allCompanyData.allPesticideData
                          }
                          typeSelect='Pesticide'
                        />
                      ) : (
                        <Loader
                          type='Oval'
                          color='#000'
                          height={50}
                          width={50}
                        />
                      )}
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Paper className={[classes.paper, classes.marginTopIncrease]}>
                <div style={{ textAlign: 'center' }}>
                  {!this.props.loader ? (
                    <ProblemSlider
                      info={
                        this.props.farmerData.cropArray
                          ? this.props.farmerData.cropArray.concat(
                            this.props.farmerData.problemArray
                          )
                          : null
                      }
                    />
                  ) : (
                    <Loader type='Oval' color='#000' height={50} width={50} />
                  )}
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/* )} */}
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    weatherDetail: state.reducer.weatherData,
    farmerData: state.farmerReducer,
    loader: state.authReducer.authenticated,
    farmerId: state.authReducer.currentUserData.user.id,
    allCompanyData: state.companyReducer,
    cityList: state.farmerReducer.cityList
  }
}
function mapDispatchToProps (dispatch) {
  return {
    requestWeather: () => {
      dispatch(weatherData())
    },
    getAddedCrop: obj => {
      dispatch(getCropAddData(obj))
    },
    getAddedProblem: obj => {
      dispatch(getProblemAddData(obj))
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
  withStyles(styles, { name: 'FarmerMain' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FarmerMain)
