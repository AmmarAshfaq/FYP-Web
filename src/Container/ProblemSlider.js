import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { browserHistory } from 'react-router'
import { getSpecificCrop } from './store/action/allAddItem'
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 18
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    cursor: 'pointer'
  }
})

class ProblemSlider extends React.Component {
 

  goToProblem = (selectId, type) => {
    console.log(selectId)
    this.props.typeSelect === 'Crop'
      ? browserHistory.push({
        pathname: '/ProductList',
        state: { typeCheck: this.props.typeSelect, display: this.props.info }
      })
      : this.props.typeSelect === 'Problem' || type === 'Problem'
        ? browserHistory.push({
          pathname: '/problemSolution',
          state: { typeCheck: this.props.typeSelect, selectId: selectId }
        })
        : type === 'Crop'
          ? this.cropFetch(selectId)
          : null
  }
  cropFetch = id => {
    let obj = {
      _id: id
    }
    this.props.getCrop(obj)
    // browserHistory.push('/specificCrop')
  }
  render () {
    const { classes, 
      info } = this.props

    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: info.length > 2 ? 3 : info.length,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000
    }
    console.log(this.props.info)
    return (
      <div>
      <Slider {...settings}>
        {this.props.info.map((data, ind) => (
          <Card className={classes.card} keys={ind}>
            <CardHeader title={data.title} />
            <CardMedia
              className={classes.media}
              image={data.image_url}
              title='Contemplative Reptile'
              onClick={this.goToProblem.bind(this, data._id, data.type)}
            />
            <CardContent>
              <Typography component='p'>{data.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getCrop: obj => {
      dispatch(getSpecificCrop(obj))
    }
  }
}
export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ProblemSlider)
