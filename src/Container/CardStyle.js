import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 600,
    textAlign:'center'
  },
  media: {
    height: 200,
  },
  title:{
      marginTop:5,
      marginBottom:5
  }
};

function MediaCard(props) {
  const { classes,title,img } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={img}
        />
        
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
      
     
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

