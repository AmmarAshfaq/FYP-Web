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
class ProblemSolution extends Component {
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
                  Problem Solution
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
                    Title
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
                <Grid item xs={12}>
                  <Typography
                    variant='title'
                    gutterBottom
                    className={classes.paddingText}
                  >
                    <audio
                      id='t-rex-roar'
                      controls
                      src='http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3'
                      
                    >
                      Your browser does not support the
                      {' '}
                      <code>audio</code>
                      {' '}
                      element.
                    </audio>
                  </Typography>
                  <Typography
                    variant='title'
                    gutterBottom
                    noWrap
                    className={classes.paddingText}
                  >
                    Desciption:{' '}
                    <ul>
                      <li>A paragraph is a self-contained unit of a discourse in writing dealing with a particular <br/>point or idea. A paragraph consists of one or more sentences</li>
                      </ul>
                  </Typography>
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

export default withStyles(styles)(ProblemSolution)
