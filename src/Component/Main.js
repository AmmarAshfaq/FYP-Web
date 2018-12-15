import React, { Component, Fragment } from 'react'
import Slider from './Slider'
// import Footer from './Footer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'
import { changeNavbar } from '../Container/store/action/authAction'

const styles = theme => ({
  paperStyle: {
    height: 200,
    // padding: 40,
    paddingTop: 15,
    rounded: true,
    // paddingBottom:0,
    textAlign: 'center'
    // alignItems:'center',
    // margin:'auto'
  },
  root: {
    backgroundColor: '#000',
    overflowX: 'hidden',
    overflowY: 'hidden'
  }
})
class Main extends Component {
  componentWillMount () {
    localStorage.removeItem('token')

    this.props.changeRoutes('Main')
  }
  render () {
    const { classes } = this.props
    return (
      // <Fragment className={classes.root}>
      <Fragment>
        <Slider />
        <Grid container spacing={24} style={{ marginTop: 5 }}>
          <Grid item xs style={{ marginLeft: 10 }}>
            <Paper className={classes.paperStyle}>
              <Typography variant='display1' gutterBottom>
                Farmer
              </Typography>
              <List component='nav'>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary='Sell Crops' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary='Buy Agriculture Stuff' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary='Expert Advice' />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paperStyle}>
              <Typography variant='display1' gutterBottom>
                Buyer
              </Typography>
              <List component='nav'>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Buy Crops' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Buy Agriculture Stuff' />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paperStyle}>
              <Typography variant='display1' gutterBottom>
                Expert
              </Typography>
              <List component='nav'>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Give Advice' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Buy Agriculture Stuff' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Make Profit' />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs style={{ marginRight: 10 }}>
            <Paper className={classes.paperStyle}>
              <Typography variant='display1' gutterBottom>
                Company
              </Typography>
              <List component='nav'>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary='Sell Agriculture Stuff' />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Paper style={{ height: 200, margin: 10, textAlign: 'center' }}>
          <Typography
            variant='display2'
            style={{ margin: 5, paddingTop: 30, paddingBottom: 10 }}
          >
            Grow With Us
          </Typography>
          <Typography variant='headline' style={{ margin: 5 }}>
            Together Let's Build SAES As A Resource For Agriculture
          </Typography>
        </Paper>
      </Fragment>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    changeRoutes: obj => {
      dispatch(changeNavbar(obj))
    }
  }
}
export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Main)
