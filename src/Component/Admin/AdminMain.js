import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPanel } from '../../Container/store/action/adminAction'
// import { changeNavbar } from '../../Container/store/action/action'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { compose } from 'redux'
import CardStyle from '../../Container/CardStyle'
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 40
  }
})
class AdminMain extends Component {
  constructor () {
    super()
    //  this.changeState = this.changeState.bind(this)
  }
  // componentWillMount () {
  //   this.props.changeAppBar('AdminHome')
  // }

  changeState = value => {
    console.log(value)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <CardStyle
              title='Company'
              img='https://www.umsalert.com/wp-content/uploads/2017/04/Header_companypres.jpg'
              onClick={this.changeState.bind(this, 'Company')}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Farmer'
              img='https://w.ndtvimg.com/sites/22/2015/11/09111508/cultivating-hope-farmer-suicide-ndtv-6.jpg'
              onClick={this.changeState.bind(this, 'Farmer')}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Buyer'
              img='http://indonesiaexpat.biz/wp-content/uploads/2017/03/hands-1063442_960_720-735x400.jpg'
              onClick={this.changeState.bind(this, 'Buyer')}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Expert'
              img='http://tonyconniff.com/wp-content/uploads/2018/07/Expert-Image.png'
              onClick={this.changeState.bind(this, 'Expert')}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    changePanel: obj => {
      dispatch(selectPanel(obj))
    },
    // changeAppBar: obj => {
    //   dispatch(changeNavbar(obj))
    // }
  }
}
export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(AdminMain)
