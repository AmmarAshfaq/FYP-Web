import React, { Component } from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  papper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },

  tableCellIncrease: {
    fontSize: '1.5vw',
    lineHeight: 0,
    textAlign: 'center'
  }
})
const iconList = {
  '01d': 'wi-day-sunny',
  '01n': 'wi-night-clear',
  '02d': 'wi-day-cloudy',
  '02n': 'wi-night-partly-cloudy',
  '03d': 'wi-cloud',
  '03n': 'wi-night-alt-cloudy',
  '04d': 'wi-cloudy',
  '04n': 'wi-night-cloudy',
  '09d': 'wi-showers',
  '09n': 'wi-night-showers',
  '10d': 'wi-rain',
  '10n': 'wi-night-rain',
  '11d': 'wi-thunderstorm',
  '11n': 'wi-night-thunderstorm',
  '13d': 'wi-snow',
  '13n': 'wi-night-snow',
  '50d': 'wi-fog',
  '50n': 'wi-night-fog'
}
class Weather extends Component {
  renderWeatherIcons = code => {
    const iconClass = `wi ${iconList[code]} current-weather-icon`
    return <i className={iconClass} />
  }
  render () {
    const dataGet = [
      { days: 'SUN', cloud: 'wi-day-cloudy' },
      { days: 'MON' },
      { days: 'TUE' },
      { days: 'WED' },
      { days: 'THU' },
      { days: 'FRI' },
      { days: 'SAT' }
    ]
    const dataValue = this.props.data

    console.log(dataValue)

    for (var i = 0; i < dataValue.length; i++) {
      dataValue[i]['days'] = dataGet[i]
    }
    console.log(dataValue)
    const { classes } = this.props
    return (
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                {dataValue.map((item, index) => (
                  <TableCell className={classes.tableCellIncrease} keys={index}>
                    <span>
                      <p>{item.days.days}</p>
                      {this.renderWeatherIcons(item.rain.icon)}
                      <p style={{ textAlign: 'center' }}>
                        <span>{`${item.temperature.max.toFixed()}'C `}</span>
                      </p>
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Weather)
