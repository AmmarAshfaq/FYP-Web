import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import './SliderC.css'
const imgUrls = [
  {
    title: 'Diseases',
    functionTitle1: 'All Types Of Diseases Information Related To Agriculture',
    img: 'http://mediad.publicbroadcasting.net/p/wunc/files/styles/x_large/public/201307/Blght.jpg'
  },
  {
    title: 'Crop',
    functionTitle1: 'Crop Rates,Purchase Crops,Sell Crops',

    img: 'http://www.wallpapers4u.org/wp-content/uploads/field_ears_agriculture_crop_grain_42484_1920x1080.jpg'
  },
  {
    title: 'Technologies',
    functionTitle1: 'All Types Of Technologies Related to Agriculture',

    img: 'https://i0.wp.com/www.teninsider.com/wp-content/uploads/2016/11/Fendt.jpg'
  },
  {
    title: 'Fertilizers',
    functionTitle1: 'All Types Of Fertilizers Related to Agriculture',

    img: 'http://tinychempro.com/img/products/fertilizer.jpg'
  },
  {
    title: 'Pesticide',
    functionTitle1: 'All Types Of Pesticide Related to Agriculture',

    img: 'https://agroday.com.ua/wp-content/uploads/2018/02/Dollarphotoclub_73046732-1068x712.jpg'
  }
]

const styles = {
  manageArrow: {
    position: 'absolute',
    color: '#000',
    cursor: 'pointer',
    fontSize: '3rem'
  },
  rightArrow: {
    right: -5,
    top: 255
  },
  leftArrow: {
    position: 'absolute',
    color: '#000',
    cursor: 'pointer',
    fontSize: '3rem'
  }
}

export default class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImageIndex: 0
    }

    // this.nextSlide = this.nextSlide.bind(this)
    // this.previousSlide = this.previousSlide.bind(this)
  }

  previousSlide () {
    // console.log(imgUrls)
    const lastIndex = imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index
    })
  }
  componentDidMount () {
    setInterval(() => {
      this.previousSlide()
    }, 3000)
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index
    })
  }

  render () {
    console.log(this.state.currentImageIndex)
    return (
      <Fragment>
        <div
          onClick={this.nextSlide.bind(this)}
          style={{
            position: 'absolute',
            
            color: '#000',
            cursor: 'pointer',
            fontSize: '3rem',
            // right: -5,
            top: 255
          }}
        >
          {/* {glyph} */}
        ◀
          
        </div>
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

        <div
          onClick={this.previousSlide.bind(this)}
          style={{
            position: 'absolute',
            color: '#000',
            cursor: 'pointer',
            fontSize: '3rem',
            right: -5,
            top: 255
          }}
        >
          {/* {glyph} */}
          ▶
        </div>
      </Fragment>
    )
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => {
  return (
    <div onClick={clickFunction} style={styles.manageArrow}>
      {glyph}
    </div>
  )
}

const ImageSlide = ({ url }) => {
  console.log(url.img)
  const styles = {
    imgStyle: {
      width: '100%',
      height: 500,
      paddingTop: 40
    },
    headingStyle: {
      position: 'absolute',
      top: 157,
      right: 450
    }
  }

  return (
    <div>

      <h1
        style={{
          position: 'absolute',
          top: 130,
          right: 950,
          fontSize: 60,
          color: '#fff',
          // width:'100%',
          
        }}
      >
        {url.title}
      </h1>
      <p
        style={{
          position: 'absolute',
          top: 220,
          right: 550,
          fontSize: 30,
          color: '#fff'
        }}
      >
        {' '}{url.functionTitle1}
      </p>
      <img src={url.img} style={styles.imgStyle} />
    </div>
  )
}
