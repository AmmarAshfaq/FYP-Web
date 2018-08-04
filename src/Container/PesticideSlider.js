import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign:'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
 
 
});

class PesticideSlider extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
           
            title="New Pesticides"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
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



export default withStyles(styles)(PesticideSlider);
