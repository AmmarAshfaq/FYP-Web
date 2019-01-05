import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { browserHistory } from 'react-router';

const styles = {
  card: {
    maxWidth: 600,
    textAlign: 'center'
  },
  media: {
    height: 200,
    cursor: 'pointer'
  },
  title: {
    marginTop: 5,
    marginBottom: 5
  }
}

class MediaCard extends Component {
  changeScreen = data => {
    if (data === 'Farmer') {
      browserHistory.push('/adminmain/farmer')
    } else if (data === 'Company') {
      browserHistory.push('/adminmain/company');
    } else if (data === 'Buyer') {
      browserHistory.push('/adminmain/buyer');
    } else {
      browserHistory.push('/adminmain/expert');
    }
  }
  render () {
    const { classes, title, img } = this.props

    return (
      <Card
        className={classes.card}
        onClick={() => {
          this.changeScreen(title)
        }}
      >
        <CardMedia className={classes.media} image={img} />

        <Typography
          gutterBottom
          variant='h5'
          component='h2'
          className={classes.title}
        >
          {title}
        </Typography>
      </Card>
    )
  }
}

export default withStyles(styles)(MediaCard)
