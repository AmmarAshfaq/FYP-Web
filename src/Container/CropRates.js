import React, { Component, Fragment } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography
} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import croprates from '../Component/AllData/CropRates'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
const styles = theme => ({
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 120,
    float: 'right',
    marginBottom: 10
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
})
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

class CropRates extends Component {
  state = {
    city: 'Select City',
    selectList: []
  }
  onChange = event => {
    this.setState({
      city: event.target.value
      //   selectList: this.props.list.filter(item => item.city === this.state.city)
    })
  }
  getCropRate = url => {
    console.log(url)
  }
  render () {
    let i = 0
    const { selectList } = this.state
    const { classes } = this.props
    return (
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
                  {this.props.list
                    ? this.props.list.map(item => {
                      return (
                        <option value={item.cityName}>{item.cityName}</option>
                      )
                    })
                    : null}

                  {/* <option value={'Karachi'}>Karachi</option>a{' '}
                  <option value={'Lahore'}>Lahore</option>
                  <option value={'Hyderabad'}>Hyderabad</option> */}
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
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}
export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(CropRates)
