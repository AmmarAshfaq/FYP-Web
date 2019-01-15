import React, { Component, Fragment } from 'react'
import {
  Grid,
  Paper,
 
  TextField,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import allData from '../Component/AllData/MachineryData'
import classnames from 'classnames'
import NewList from './ProductSlider'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { openModel } from './store/action/action'
import PurchaseForm from './PurchaseForm'
import { getSpecificCrop } from './store/action/allAddItem'
import {
  getFertilizerIdAction,
  getMachineryIdAction,
  getPesticideIdAction
} from './store/action/companyAction'
import Background from '../images/theme.png'
const styles = theme => ({
  parentRoot:{
    marginTop: 1,
    padding: 1,
    backgroundImage: `url(${Background})`
  },
  root: {
    // backgroundImage: `url(${Background})`,
    flexGrow: 1,
    marginTop: 90,
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    opacity:0.9
  },
  textField: {
    border: '1px solid #000',
    borderRadius: 5
  },
  button: {
    margin: theme.spacing.unit,
    width: '20%',
    fontSize: 12
  },
  card: {
    maxWidth: 345,
    cursor: 'pointer'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' ,// 16:9,
    opacity:0.9
  }
})
function FormRow (props) {
  const { classes, item, cardBottomChange } = props

  return (
    <Fragment>
      {item.map((value, ind) => (
        <Fragment>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                {cardBottomChange === 'Crop' ? (
                  <Fragment>
                    <CardMedia
                      className={classes.media}
                      image={value.image_url}
                      title='Contemplative Reptile'
                      onClick={() => props.funcChange(value._id)}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='headline'
                        component='h2'
                      >
                        {value.name}
                      </Typography>
                      <Typography component='p'>{value.price}</Typography>
                    </CardContent>
                  </Fragment>
                ) : (
                  <Fragment>
                    <CardMedia
                      className={classes.media}
                      image={value.image_url}
                      title='Contemplative Reptile'
                      onClick={() => props.funcChange(value._id, value)}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='headline'
                        component='h2'
                      >
                        {/* {value.title} */}
                        {value.pesticideName
                          ? value.pesticideName.substring(0, 15)
                          : value.machineName
                            ? value.machineName.substring(0, 15)
                            : value.name
                              ? value.name.substring(0, 15)
                              : null}
                      </Typography>
                      <Typography component='p'>
                        {value.price.substring(0, 15)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant='contained'
                        size='large'
                        color='primary'
                        className={classes.button}
                        onClick={() => props.openForm(value)}
                      >
                        Purchase
                      </Button>
                    </CardActions>
                  </Fragment>
                )}
              </Card>
            </Paper>{' '}
          </Grid>
        </Fragment>
      ))}
    </Fragment>
  )
}
class ProductList extends Component {
  changeScreen = (id, data) => {
    this.props.location.state.typeCheck === 'Crop'
      ? this.cropFetch(id)
      : this.companyFetch(id, data)
  }
  cropFetch = id => {
    let obj = {
      _id: id
    }
    this.props.getCrop(obj)
    // browserHistory.push('/specificCrop')
  }
  companyFetch = (id, data) => {
    console.log(data)
    if (data.name) {
      this.props.getFertilizerProduct(data)
    } else if (data.machineName) {
      this.props.getMachineryProduct(data)
    } else if (data.pesticideName) {
      this.props.getPesticideProduct(data)
    }
    browserHistory.push('/productdata')
  }

  handleClickOpen = (obj, productDetail) => {
    let objSet = {
      toggle: true,
      specificDialog: obj,
      selectId: productDetail
    }
    this.props.selectValue(objSet)
  }
  changeState = event => {

    this.setState({
      selectValue: this.props.location.state.display.filter(item =>
        item.machineName
          ? item.machineName
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) > -1
          : item.name
            ? item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
            -1
            : item.pesticideName
              ? item.pesticideName
                .toLowerCase()
                .indexOf(event.target.value.toLowerCase()) > -1
              : null
      )
    })
  }
  render () {
    const { classes } = this.props
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }
    return (
      <div className={classes.parentRoot}>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} container>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <div className={classes.textField}>
                  {/* {this.props.location.state.typeCheck === 'Crop' ? (
                    <FormControl style={{ marginRight: 5, width: '20%' }}>
                      <NativeSelect name='age'>
                         onChange={this.handleChange('age')}
                         value={this.state.age}
                         className={classes.selectEmpty}
                        <option value=''>All</option>
                        <option value={10}>Vegetables</option>
                        <option value={20}>Fruit</option>
                        <option value={30}>Pesticide</option>
                      </NativeSelect>
                    </FormControl>
                  ) : (
                    <FormControl style={{ marginRight: 5, width: '20%' }}>
                      <NativeSelect name='age'>
                         onChange={this.handleChange('age')}
                       value={this.state.age}
                        className={classes.selectEmpty}
                        <option value=''>All</option>
                        <option value={10}>Machinery</option>
                        <option value={20}>Fertilizer</option>
                        <option value={30}>Pesticide</option>
                      </NativeSelect>
                    </FormControl>
                  )} */}
                  {this.props.location.state.typeCheck === 'Crop' ? (
                    <TextField
                      id='name'
                      placeholder='Search Product'
                      //   value={this.state.name}
                      onChange={event => this.changeState(event)}
                      //   margin='normal'
                      style={{ marginRight: 15, width: '50%' }}
                    />
                  ) : (
                    <TextField
                      id='name'
                      placeholder='Search Product'
                      //   value={this.state.name}
                      onChange={event => this.changeState(event)}
                      //   onChange={this.handleChange('name')}
                      //   margin='normal'
                      style={{ marginRight: 15, width: '50%' }}
                    />
                  )}
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={classnames(classes.paper, classes.set)}>
              {this.props.location.state.typeCheck === 'Crop' ? (
                <Slider {...settings}>
                  {//   console.log(allData)

                    this.props.location.state.display.map((item, ind) => {
                      return (
                        <img
                          alt='loading ...'
                          src={item.image_url}
                          height='350px'
                        />
                      )
                    })}
                </Slider>
              ) : (
                <Slider {...settings}>
                  {//   console.log(allData)
                    this.props.location.state.display.map((item, ind) => {
                      return (
                        <img
                          alt='loading ...'
                          src={item.image_url}
                          height='350px'
                        />
                      )
                    })}
                </Slider>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <NewList info={this.props.location.state.display} />
          </Grid>
        </Grid>

        <Grid container spacing={8} style={{ marginLeft: 10 }}>
          <Grid item xs={12} container spacing={24}>
            {this.props.location.state.typeCheck === 'Crop' ? (
              <FormRow
                classes={classes}
                item={this.props.location.state.display}
                funcChange={this.changeScreen}
                cardBottomChange={this.props.location.state.typeCheck}
              />
            ) : (
              <FormRow
                classes={classes}
                item={this.props.location.state.display}
                funcChange={this.changeScreen}
                cardBottomChange={this.props.location.state.typeCheck}
                openForm={this.handleClickOpen.bind(this, 'ContactCompany')}
              />
            )}
          </Grid>
        </Grid>
        <PurchaseForm />
      </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectValue: data => {
      dispatch(openModel(data))
    },
    getCrop: data => {
      dispatch(getSpecificCrop(data))
    },
    getFertilizerProduct: data => {
      dispatch(getFertilizerIdAction(data))
    },
    getMachineryProduct: data => {
      dispatch(getMachineryIdAction(data))
    },
    getPesticideProduct: data => {
      dispatch(getPesticideIdAction(data))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(ProductList)
