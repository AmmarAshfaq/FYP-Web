import React, { Component } from 'react'
import Hidden, { Grid, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CommentBox from '../Component/Farmer/CommentBox'

const styles = theme => ({
  root: {
    marginTop: 80,
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
  leftMargin: {
    marginLeft: 10,
    marginRight: 10
  },
  textCenter: {
    textAlign: 'center',
    margin: 10
  },
  imgSize: {
    width: '100%',
    height: 300,
    borderRadius: 3,
    cursor: 'pointer'
  },
  paddingText: {
    padding: 10
  }
})
class SpecificCrop extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} container spacing={24}>
            <Grid item xs={4} />
            <Grid item xs={4} zeroMinWidth>
              <Paper className={classNames(classes.paper, classes.textCenter)}>
                <Typography variant='headline' gutterBottom noWrap>
                CROP DATA
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4} />
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={24}
            className={classes.leftMargin}
          >
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  <Typography
                    variant='display1'
                    gutterBottom
                    noWrap
                    className={classNames(classes.paddingText,classes.textCenter)}
                  >
                    Potatoe's
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={
                      'https://www.abcscapes.com/wp-content/uploads/common-plant-diseases.jpg'
                    }
                    alt=''
                    className={classes.imgSize}
                  />
                </Grid>
                <Grid item xs={12} container>
                <Grid item xs={8} >
                <Typography
                    variant='title'
                    gutterBottom
                    className={classes.paddingText}
                  >
                  Price: 1200
                  </Typography>
            
                </Grid>
                <Grid item xs={4}>
                <Typography
                    variant='title'
                    gutterBottom
                    className={classes.paddingText}
                  >
                  Weight: 200 kg
                  </Typography>
            
                </Grid>
                </Grid>
                <Grid item xs={12} container>
                <Grid item xs={8} >
                <Typography
                    variant='title'
                    gutterBottom
                    className={classes.paddingText}
                  >
                Crop Completion Date : Mon Dec 24 2018 10:33:30
                  </Typography>
            
                </Grid>
                <Grid item xs={4}>
                <Typography
                    variant='title'
                    gutterBottom
                    className={classes.paddingText}
                  >
                  Transport: false
                  </Typography>
            
                </Grid>
                </Grid>
                

              </Paper>

            </Grid>
            <Grid item xs={4}>
            </Grid>
          </Grid>
          <CommentBox/>
         
        </Grid>
       
        
      </div>
    )
  }
}

export default withStyles(styles)(SpecificCrop);
