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
import {connect} from 'react-redux';
import {compose} from 'redux';
import {changeNavbar} from '../../Container/store/action/action'
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

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  onChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  onSelect = name => {
    this.setState({
      city: name
    })
  }
  onSubmit = () => {
    this.setState({
      selectList: croprates.filter(
        item =>
          item.category === this.state.search || item.city === this.state.city
      )
    })
  }
componentWillMount(){
  this.props.changeAppBar('BuyerHome')
}
  render () {
    const { classes } = this.props
    const { selectList, city, search, anchorEl } = this.state
    let i = 0
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>MON</p>
                        <i className='wi wi-day-lightning' />
                        <p>26'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>TUE</p>
                        <i className='wi wi-day-cloudy-windy' />
                        <p>24'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>WED</p>
                        <i className='wi wi-day-cloudy-windy' />
                        <p>34'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>THU</p>
                        <i className='wi wi-day-hail' />
                        <p>30'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>FRI</p>
                        <i className='wi wi-day-thunderstorm' />
                        <p>10'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>SAT</p>
                        <i className='wi wi-day-sunny-overcast' />
                        <p>30'C</p>
                      </span>

                    </TableCell>
                    <TableCell className={classes.tableCellIncrease}>

                      <span>
                        <p>SUN</p>
                        <i className='wi wi-day-cloudy-windy' />
                        <p>20'C</p>
                      </span>

                    </TableCell>

                  </TableRow>
                </TableHead>
              </Table>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Paper className={classes.rootTable}>
                <Table className={classes.table}>

                  <TableHead>
                    <TableRow>
                      <TableCell colSpan='2'>
                        <Typography variant='headline' gutterBottom>
                          Crop Rates
                        </Typography>
                      </TableCell>
                      <TableCell colSpan='2'>
                        {/* <button
                          onClick={this.onSubmit}
                          style={{ float: 'right' }}
                        >
                          Submit
                        </button> */}

                        <Button
                          variant='contained'
                          color='default'
                          onClick={this.onSubmit}
                          style={{ float: 'right', padding: 10 }}
                        >
                          Submit
                        </Button>
                        <Button
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
                        </Menu>

                        {/* <input
                          type='text'
                        /> */}
                        <TextField
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
                        />
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
                          <CustomTableCell numeric>
                            {++i}
                          </CustomTableCell>
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
                  <MachinerySlider info={ImgData} />
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  <MachinerySlider info={FertilizerData} />
                </Paper>
                <Paper className={classNames(classes.paper)}>
                  <MachinerySlider info={PesticideData} />
                </Paper>

              </Grid>

            </Grid>

          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ProblemSlider info={FermerCrop} />
            </Paper>
          </Grid>
        </Grid>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    changeAppBar:(obj)=>{
      dispatch(changeNavbar(obj))
    }
  }
}
export default compose(connect(null,mapDispatchToProps),withStyles(styles))(BuyerMain)
