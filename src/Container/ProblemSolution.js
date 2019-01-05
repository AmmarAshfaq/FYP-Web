import React, { Component } from 'react'
import  { Grid, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CommentBox from '../Component/Farmer/CommentBox'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSpecificProblem } from './store/action/allAddItem'
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
 
  componentWillMount () {
    // console.log("chal")
    this.props.getProblemDetail(this.props.location.state.selectId)
  }
  componentDidMount(){
    setTimeout(()=>{
this.props.doneProcess()
    },2000)
  }
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
                    className={classNames(
                      classes.paddingText,
                      classes.textCenter
                    )}
                  >
                    {/* {this.} */}
                    {this.props.problemData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={
                      this.props.problemData.image_url
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
                      src={this.props.problemData.audio_url}
                    >
                      Your browser does not support the <code>audio</code>{' '}
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
                      <li>
                       {this.props.problemData.description}
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4} />
          </Grid>
          {
this.props.loader ?
<CircularProgress className={classes.progress} />

:          <CommentBox dataArr={this.props.problemData.comments} typeCheck="problem"/>
          }
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    problemData:state.allAddedItemReducer.specificProblem,
    loader:state.allAddedItemReducer.loader
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getProblemDetail: obj => {
      dispatch(getSpecificProblem(obj))
    },
    doneProcess: () => {
      dispatch(loaderProcessDone())
    }
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ProblemSolution)
