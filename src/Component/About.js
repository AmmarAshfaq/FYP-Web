import React, { Component } from 'react'
import {
  Paper,
  Typography,
  Grid,
  Avatar,

} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { changeNavbar } from '../Container/store/action/authAction'
// import { url } from 'inspector';
import Background from '../images/theme.png'
 const styles = theme => ({
  paper: {
    textAlign: 'center',
    padding: 5,
  },
  root: {
    marginTop: 70,
    padding: 50,
    backgroundImage:`url(${Background})`,

  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    display: 'inline-block',
    width: 80,
    height: 80,
    margin: 10
  },
  parentPaper:{
    opacity: 0.9

  },
  titleText: {
    display: 'inline-block',
    position: 'relative',
    top: -55
  },
  subtitleText: {
    display: 'inline-block',
    position: 'relative',
    top: -33,
    right: 139
  },
  textStyle: {
    display: 'inline-block',
    flexDirection: 'column',
    position: 'relative',
    top: -35
  },
  itemText: {
    fontSize: 32
  },
  listDis:{
    marginTop:5,
    marginBottom:5
  }
})
class About extends Component {
 
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper elevation={5} className={classes.parentPaper}>
          <Grid container spacing={24} style={{ padding: 20 }} fullWidth>
            <Grid item xs={12} sm={4} />
            <Grid item xs={12} sm={4}>
                <Typography variant='display2' gutterBottom style={{textAlign:'center'}}>
                  Our Team
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} />
            <Grid item xs={12} sm={6}>
              <Paper>
                <Avatar
                  alt='loading....'
                  src={require('../images/ammar.jpg')}
                  className={classNames(classes.bigAvatar, classes.avatar)}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>Ammar Ashfaq</Typography>
                  <Typography variant='subheading'>Team Lead</Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>Under Graduate from Hamdard University</li>
                      <li className={classes.listDis}>MERN Stack Development Course from Saylani</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>3 Months Internship In BlockLinks</li>
                    </ul>
                  </ul>
                </div>
              
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/mobeen.jpg')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>Mobeen Mehboob</Typography>
                  <Typography variant='subheading'>Team Member</Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>Under Graduate from Hamdard University</li>
                      <li className={classes.listDis}>MERN Stack Development Course from Saylani</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>
                  </ul>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/malik.jpg')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>Malik Jamil</Typography>
                  <Typography variant='subheading'>Team Member</Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>Under Graduate from Hamdard University</li>
                      <li className={classes.listDis}>MERN Stack Development Course from Saylani</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>
                  </ul>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/profAqeel.jpg')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>
                    Dr.Prof.Aqeel-Ur-Rehman
                  </Typography>
                  <Typography variant='subheading'>Supervisor</Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>
                  </ul>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/sirWaleej.jpg')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>
                    Asst.Prof.Mr.Waleej.Haider
                  </Typography>
                  <Typography variant='subheading'>
                    External Supervisor
                  </Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>
                  </ul>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/avatar.png')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>
                    Asst.Prof.Muhammad Fahad
                  </Typography>
                  <Typography variant='subheading'>Co Supervisor</Typography>
                </div>
                <div style={{marginBottom:10}}>
                  <ul>
                    <li className={classes.listDis}>Qualification</li>
                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>

                    <li className={classes.listDis}>Experience</li>

                    <ul>
                      <li className={classes.listDis}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    </ul>
                  </ul>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant='display1'>Vision</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant='display1'>Mission</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
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
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(About)
