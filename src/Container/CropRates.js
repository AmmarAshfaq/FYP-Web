import React, { Component, Fragment } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography
} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import croprates from '../Component/AllData/CropRates'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getCropData } from './store/action/farmerAction'
const styles = theme => ({
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700
  },
  tableBody:{
height:600,
overflowY:'visible'

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
    let change = JSON.parse(event.target.value)
    // console.log(change)
    // alert(JSON.stringify(event.target.value))
    this.setState({
      city: change.cityName
      //   selectList: this.props.list.filter(item => item.city === this.state.city)
    })
    this.props.getCrop(change.url)
  }
  // getCropRate = url => {
  //   console.log(url, 'hello')
  // }
  render () {
    console.log(this.state.city)
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
                      // {console.log(item)}
                      let itemVal = JSON.stringify(item)
                      return <option value={itemVal}>{item.cityName}</option>
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
            <CustomTableCell numeric>Max Price</CustomTableCell>
            <CustomTableCell numeric>Min Price</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
{/*           
          {
            this.props.cityRates.map((n, index,arr) => {
            return (
              <TableRow className={classes.row} key={n.name}>
                <CustomTableCell numeric>{++i}</CustomTableCell>
                <CustomTableCell numeric>{n.cropName}</CustomTableCell>
                <CustomTableCell numeric>{n.cropMax}</CustomTableCell>
                <CustomTableCell numeric>{n.cropMin}</CustomTableCell>
              </TableRow>
            )
          })} */}
           
           {
            this.props.cityRates.map((n, index,arr) => {
            return (
              <TableRow className={classes.row} key={n.name}>
                <CustomTableCell numeric>{++i}</CustomTableCell>
                <CustomTableCell numeric>{n.cropName}</CustomTableCell>
                <CustomTableCell numeric>{n.cropMax}</CustomTableCell>
                <CustomTableCell numeric>{n.cropMin}</CustomTableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}
function mapStateToProps(state){
  return{
    cityRates:state.farmerReducer.cityCrop
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getCrop: data => {
      dispatch(getCropData(data))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CropRates)
