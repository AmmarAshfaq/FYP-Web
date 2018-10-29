import React, { Component, Fragment } from 'react'
import {
  Grid,
  Paper,
  FormControl,
  NativeSelect,
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 90,
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary
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
    paddingTop: '56.25%' // 16:9
  }
})
function FormRow (props) {
  const { classes, item } = props
  console.log(props)

  return (
    <Fragment>
      {item.map((value, ind) => (
        <Fragment>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={value.img}
                  title='Contemplative Reptile'
                  onClick={props.funcChange}
                />
                <CardContent>
                  <Typography gutterBottom variant='headline' component='h2'>
                    {value.title}
                  </Typography>
                  <Typography component='p'>
                    {value.functionTitle1}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    className={classes.button}
                  >
                    Add to Card
                  </Button>
                  <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    className={classes.button}
                  >
                    Add to List
                  </Button>
                </CardActions>
              </Card>
            </Paper>{' '}
          </Grid>
        </Fragment>
      ))}
    </Fragment>
  )
}
class ProductList extends Component {
  changeScreen = () => {
    browserHistory.push('/productdata')
  }
  componentWillMount () {
    console.log(window.document.referrer)
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
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} container>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <div className={classes.textField}>
                  <FormControl style={{ marginRight: 5, width: '20%' }}>
                    <NativeSelect name='age'>
                      {/* // onChange={this.handleChange('age')}  */}
                      {/* // value={this.state.age} */}
                      {/* // className={classes.selectEmpty} */}
                      <option value=''>All</option>
                      <option value={10}>Machinery</option>
                      <option value={20}>Fertilizer</option>
                      <option value={30}>Pesticide</option>
                    </NativeSelect>

                  </FormControl>
                  <TextField
                    id='name'
                    placeholder='Search Product'
                    //   value={this.state.name}
                    //   onChange={this.handleChange('name')}
                    //   margin='normal'
                    style={{ marginRight: 15, width: '50%' }}
                  />
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
              <Slider {...settings}>
                {//   console.log(allData)
                allData.map((item, ind) => {
                  return <img alt='loading ...' src={item.img} height='350px' />
                })}
              </Slider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <NewList info={allData} />
          </Grid>
        </Grid>

        <Grid container spacing={8} style={{ marginLeft: 10 }}>
          <Grid item xs={12} container spacing={24}>
            <FormRow
              classes={classes}
              item={allData}
              funcChange={this.changeScreen}
            />
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ProductList)
