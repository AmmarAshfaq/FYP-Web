import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPanel } from '../../Container/store/action/adminAction'
// import { changeNavbar } from '../../Container/store/action/action'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { compose } from 'redux'
import CardStyle from '../../Container/CardStyle'
import Background from '../../images/theme.png'

const styles = theme => ({
  parentRoot: {
    marginTop: 1,
    padding: 1,
    backgroundImage: `url(${Background})`
  },
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 40,
    opacity:0.9
  },
  cardStyling:{
cursor:'pointer'
  }
})
class AdminMain extends Component {
  
 

  changeState = value => {
    console.log(value)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.parentRoot}>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <CardStyle
              title='Company'
              img='https://www.umsalert.com/wp-content/uploads/2017/04/Header_companypres.jpg'
              // type='Company'
              // onClick={()=>this.changeState(this, 'Company')}
              // className={classes.cardStyling}

            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Farmer'
              img='https://w.ndtvimg.com/sites/22/2015/11/09111508/cultivating-hope-farmer-suicide-ndtv-6.jpg'
              // type=''

              // onClick={this.changeState.bind(this, 'Farmer')}
              // className={classes.cardStyling}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Buyer'
              img='http://indonesiaexpat.biz/wp-content/uploads/2017/03/hands-1063442_960_720-735x400.jpg'
              // onClick={this.changeState.bind(this, 'Buyer')}
              // className={classes.cardStyling}

            />
          </Grid>
          <Grid item xs={6}>
            <CardStyle
              title='Expert'
              img='http://tonyconniff.com/wp-content/uploads/2018/07/Expert-Image.png'
              // onClick={this.changeState.bind(this, 'Expert')}
              // className={classes.cardStyling}

            />
          </Grid>
        </Grid>
      </div>
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
