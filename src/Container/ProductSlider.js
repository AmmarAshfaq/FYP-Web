import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { browserHistory } from 'react-router'


const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign:'center',
    marginBottom:10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    cursor:'pointer'
  },
 
 
 
});

class MachinerySlider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImageIndex: 0
    }

  //  console.log(props.info)
  }

  previousSlide () {
    const lastIndex = this.props.info.length - 1
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
    const lastIndex = this.props.info.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index
    })
  }

  goToProduct = ()=>{
    browserHistory.push({pathname:'/productList',state:{typeCheck:this.props.typeSelect}})
  }

  render() {
    const { classes,info} = this.props;
    const item = info[this.state.currentImageIndex]
    console.log(item.img)

    return (
      
      <div>
        <Card className={classes.card} >
          <CardHeader
           
            title={item.title}
          />
          <CardMedia
            className={classes.media}
            image={item.img}
            title="Contemplative Reptile"
            onClick={this.goToProduct.bind(this)}
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
         
          
        </Card>
      </div>
    );
  }
}



export default withStyles(styles)(MachinerySlider);
