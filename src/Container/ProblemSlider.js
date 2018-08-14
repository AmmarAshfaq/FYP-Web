import React  from 'react'
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

// const item = [
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Diseases Information Related To Agriculture',
//     img: 'http://www.ffc.com.pk/wp-content/uploads/Sona-Urea-P-1.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'Crop Rates,Purchase Crops,Sell Crops',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/FFC-DAP.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Technologies Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/FFC-SOP-1.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Fertilizers Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/MOP-Murate.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Pesticide Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/Sona-Boron-1.jpg'
//   }
// ]

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10,
    marginLeft:18
  },
  media: {
    height: 0,
    paddingTop: '56.25%' ,// 16:9,
    cursor: 'pointer'
  }
})

class ProblemSlider extends React.Component {
  constructor(props){
    super(props)

  }
  goToProblem =()=>{
    browserHistory.push('/problemSolution')
    }
  render () {
    const { classes } = this.props
    // console.log(item)
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000
    }
    return (
      
      
        <Slider {...settings}>
          {this.props.info.map((data, ind) => {
            return (
              <Card className={classes.card}>
                <CardHeader title={data.title} />
                <CardMedia
                  className={classes.media}
                  image={data.img}
                  title='Contemplative Reptile'
                  onClick= {this.goToProblem.bind(this)}
                />
                <CardContent>
                  <Typography component='p'>
                    This impressive paella is a perfect party dish and a fun meal to cook together with
                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>

              </Card>
            )
          })}
      
        </Slider>
      
    )
  }
}

export default withStyles(styles)(ProblemSlider)
