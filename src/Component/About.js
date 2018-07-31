import React, { Component, Fragment } from 'react'
import {
  Paper,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'
import classNames from 'classnames'

const styles = theme => ({
  paper: {
    textAlign: 'center',
    padding: 5
  },
  root: {
    marginTop: 70,
    padding: 50
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
  }
})
class About extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper elevation={5}>
          <Grid container spacing={24} style={{ padding: 20 }} fullWidth>
            <Grid item xs={12} sm={4} />
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Typography variant='display2' gutterBottom>
                  Our Team
                </Typography>
              </Paper>
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
                  <Typography variant='title'>
                    Ammar Ashfaq
                  </Typography>
                  <Typography variant='subheading'>
                    Team Lead
                  </Typography>
                </div>

                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                 
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
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
                  <Typography variant='title'>
                    Mobeen Mehboob
                  </Typography>
                  <Typography variant='subheading'>
                    Team Member
                  </Typography>
                </div>
                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
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
                  <Typography variant='title'>
                    Malik Jamil
                  </Typography>
                  <Typography variant='subheading'>
                    Team Member
                  </Typography>
                </div>
                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
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
                  <Typography variant='subheading'>
                    Supervisor
                  </Typography>
                </div>
                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
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
                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                {' '}
                <Avatar
                  alt='loading....'
                  src={require('../images/ammar.jpg')}
                  className={classes.bigAvatar}
                />
                <div className={classes.textStyle}>
                  <Typography variant='title'>
                    Asst.Prof.Muhammad Fahad
                  </Typography>
                  <Typography variant='subheading'>
                    Co Supervisor
                  </Typography>
                </div>
                <List component='nav'>

                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary='Qualification'
                      className={classes.itemText}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary='Experience' />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant='display1'>
                  Vision
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant='display1'>
                  Mission
                </Typography>
              </Paper>
            </Grid>
          </Grid>

        </Paper>
      </div>
    )
  }
}
export default withStyles(styles)(About)
