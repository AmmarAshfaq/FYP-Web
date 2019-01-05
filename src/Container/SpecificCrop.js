import React, { Component } from 'react'
import  { Grid, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CommentBox from '../Component/Farmer/CommentBox'
import { compose } from 'redux'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loaderProcessDone } from '../Container/store/action/allAddItem'

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
    margin: 10,
    padding: 7
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
  componentDidMount () {
    setTimeout(() => {
      this.props.doneProcess()
    }, 2000)
  }
  render () {
    const { classes, cropData } = this.props
    return (
      // <div>{console.log(this.props.cropData)}</div>
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
                    className={classNames(
                      classes.paddingText,
                      classes.textCenter
                    )}
                  >
                    {cropData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={cropData.image_url}
                    alt=''
                    className={classes.imgSize}
                  />
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={8}>
                    <Typography
                      variant='title'
                      gutterBottom
                      className={classes.paddingText}
                    >
                      Price: {cropData.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant='title'
                      gutterBottom
                      className={classes.paddingText}
                    >
                      Weight: {cropData.wieght}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={8}>
                    <Typography
                      variant='title'
                      gutterBottom
                      className={classes.paddingText}
                    >
                      Crop Completion Date : {cropData.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant='title'
                      gutterBottom
                      className={classes.paddingText}
                    >
                      Transport: {cropData.transport ? 'Yes' : 'No'}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4} />
          </Grid>
          {this.props.loader ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <CommentBox dataArr={cropData.comments} typeCheck='crop' />
          )}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cropData: state.allAddedItemReducer.specificCrop,
    loader: state.allAddedItemReducer.loader
  }
}
function mapDispatchToProps (dispatch) {
  return {
    doneProcess: () => {
      dispatch(loaderProcessDone())
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SpecificCrop)
