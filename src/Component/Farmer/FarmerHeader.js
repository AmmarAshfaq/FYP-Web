import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Badge,
} from '@material-ui/core'
// import Messege from '@material-ui/icons/MailOutline'
import DownArrow from '@material-ui/icons/KeyboardArrowDown'
import { withStyles } from '@material-ui/core/styles'
// import { browserHistory } from 'react-router'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle:{marginRight:5,position:'relative'}
})
class FarmerHeader extends Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Main',
      achorEl: null
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  // componentWillMount(){
  //   this.setState({toggle:this.props.itemList})
  // }
  //   changeScreen = argument => {
  //     //  browserHistory.push('/login')
  //     // console.log(argument)
  //     if (argument === 'Main') {
  //       browserHistory.push('/')
  //       console.log(argument)
  //     } else if (argument === 'Company') {
  //       browserHistory.push('/login')
  //     } else if (argument === 'Expert') {
  //       browserHistory.push('/login')
  //     } else if (argument === 'Farmer') {
  //       browserHistory.push('/login')
  //     } else if (argument === 'Buyer') {
  //       browserHistory.push('/login')
  //     } else if (argument === 'Contact') {
  //       browserHistory.push('/contact')
  //     } else if (argument === 'About') {
  //       browserHistory.push('/about')
  //     }
  //     // this.props.itemAdd(argument)
  //     this.setState({ anchorEl: null })
  //   }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <Fragment>
       <AppBar position='fixed' style={{ flexGrow: 1 }}>

            <Toolbar>
              <Avatar
                alt='Logo'
                src={require('../../images/logo2.jpg')}
                className={classes.avatarStyle}
                />
              <div className={classes.titleStyle}>
                <Typography variant='title' color='inherit'>

                    Farmer
                  </Typography>

              </div>
              <div>
                <Button //   onClick={this.changeScreen.bind(this, 'Main')}
                  color='inherit'
                  className={classes.buttonStyle}
                  
                  >
                  {/* <Home/> */}
                    Home
                  </Button>

                <Badge color='secondary' badgeContent={4}>
                  <Button
                    color='inherit'
                    className={classes.buttonStyle}
                    >
                      Messege
                    </Button>
                </Badge>

                <Badge color='secondary' badgeContent={6}>
                  <Button
                    color='inherit'
                    className={classes.buttonStyle}
                    >
                      Notification
                    </Button>
                </Badge>
                <Button
                  // aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup='true'
                  onClick={this.handleClick}
                  color='inherit'
                  className={classes.buttonStyle}
                  
                  >
                    More <DownArrow/>
                  </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                    //   onClose={this.handleClose}
                    style={{position:'absolute',top:40}}
                  >
                  <MenuItem
                    //   onClick={this.changeScreen.bind(this, 'Farmer')}
                    >
                      Add Problem
                    </MenuItem>
                  <MenuItem

                    //   onClick={this.changeScreen.bind(this, 'Company')}
                    >
                      Add Crop
                    </MenuItem>

                  <MenuItem
                    //    onClick={this.changeScreen.bind(this, 'Buyer')}
                    >
                      Log Out
                    </MenuItem>
                    s{' '}
                </Menu>
              </div>

            </Toolbar>

          </AppBar>
         

      </Fragment>
    )
  }
}

export default withStyles(styles)(FarmerHeader)
