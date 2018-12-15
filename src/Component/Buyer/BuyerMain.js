import React, { Component } from 'react'
import croprates from '../AllData/CropRates'
import Search from '@material-ui/icons/Search'
import KeyBoardArrow from '@material-ui/icons/KeyboardArrowDown'
import MachinerySlider from '../../Container/ProductSlider'
import ImgData from '../AllData/MachineryData'
import FertilizerData from '../AllData/FertilizerData'
import PesticideData from '../AllData/PesticideData'
import ProblemSlider from '../../Container/ProblemSlider'
import FermerCrop from '../AllData/FarmerCrops'
import Weather from '../../Container/Weather'
import { weatherData } from '../../Container/store/action/weatherAction'
import FarmerCropData from '../AllData/FarmerCropData'
import classNames from 'classnames'
import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Typography,
  TextField,
  InputAdornment
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import MachinerData from '../AllData/MachineryDataCompany'
// import {changeNavbar} from '../../Container/store/action/action'
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
  tableCellIncrease: {
    fontSize: 20,
    lineHeight: 0
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
  }
})
class BuyerMain extends Component {
  state = {
    selectList: [],
    search: '',
    city: '',
    anchorEl: null
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  componentWillMount () {
    //   // this.props.fetchMessageMain()
    //   this.props.changeAppBar('FarmerHome')
    this.props.requestWeather()
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  onChange = event => {
    this.setState({
      city: event.target.value,
      selectList: croprates.filter(
        item =>
          // item.category === this.state.search || item.city === this.state.city
          item.city === this.state.city
      )
    })
  }

  render () {
    const { classes } = this.props
    const { selectList, search, anchorEl } = this.state

    let i = 0
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Weather data={this.props.weatherDetail} />

          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Paper className={classes.rootTable}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan='3'>
                        <Typography variant='headline' gutterBottom>
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
                  <MachinerySlider info={MachinerData} typeSelect='' />
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  <MachinerySlider info={FertilizerData} typeSelect='' />
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  <MachinerySlider info={PesticideData} typeSelect='' />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ProblemSlider info={FarmerCropData} typeSelect='Crop' />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    weatherDetail: state.reducer.weatherData
    // cropData: state.farmReducer.cropArray,
    // problemData:state.farmReducer.problemArray,
    // farmerId: state.authReducer.currentUserData.user.id,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    // changeAppBar:(obj)=>{
    //   dispatch(changeNavbar(obj))
    // }
    requestWeather: () => {
      dispatch(weatherData())
    }
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(BuyerMain)

// onChange = (name, event) => {
//   this.setState({
//     [name]: event.target.value
//   })
// }
// onSelect = name => {
//   this.setState({
//     city: name
//   })
// }
// onSubmit = () => {
//   this.setState({
//     selectList: croprates.filter(
//       item =>
//         item.category === this.state.search || item.city === this.state.city
//     )
//   })
// }
// componentWillMount(){
//   this.props.changeAppBar('BuyerHome')
// } {/* <button
// onClick={this.onSubmit}
// style={{ float: 'right' }}
// >
// Submit
// </button> */}

{
  /* <Button
variant='contained'
color='default'
onClick={this.onSubmit}
style={{ float: 'right', padding: 10 }}
>
Submit
</Button> */
}
{
  /* <Button
style={{
  position: 'relative',
  float: 'right',
  marginRight: 5
}}
aria-owns={anchorEl ? 'simple-menu' : null}
aria-haspopup='true'
onClick={this.handleClick}
color='default'
variant='contained'
>
Select
<KeyBoardArrow />
</Button>
<Menu
style={{ position: 'absolute', top: 40 }}
id='simple-menu'
anchorEl={anchorEl}
open={Boolean(anchorEl)}
onClose={this.handleClose}
>
<MenuItem
  onClick={this.onSelect.bind(this, 'Karachi')}
>
  Karachi
</MenuItem>
<MenuItem
  onClick={this.onSelect.bind(this, 'Hyderabad')}
>
  Hyderabad
</MenuItem>
<MenuItem
  onClick={this.onSelect.bind(this, 'Lahore')}
>
  Lahore
</MenuItem>

s{' '}
</Menu> */
}

{
  /* <input
type='text'
/> */
}
{
  /* <TextField
className={classes.margin}
id='input-with-icon-textfield'
onChange={this.onChange.bind(this, 'search')}
// label="Search"
value={search}
style={{ float: 'right' }}
InputProps={{
  startAdornment: (
    <InputAdornment position='start'>
      <Search />
    </InputAdornment>
  )
}}
/> */
}
