import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import { browserHistory } from 'react-router'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 }
})
class ExpertHeader extends Component {
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
        {this.state.toggle === 'Main'
          ? <AppBar position='fixed' style={{ flexGrow: 1 }}>

            <Toolbar>
              <Avatar
                alt='Logo'
                src={require('../../images/logo2.jpg')}
                className={classes.avatarStyle}
                />
              <div className={classes.titleStyle}>
                <Typography variant='title' color='inherit'>

                    Expert
                  </Typography>
                
              </div>
              <div>
                <Button
                //   onClick={this.changeScreen.bind(this, 'Main')}
                  color='inherit'
                  >
                    Home
                  </Button>
                <Button
                //   onClick={this.changeScreen.bind(this, 'About')}
                  color='inherit'
                  >
                    Messeges
                  </Button>
                <Button
                //   onClick={this.changeScreen.bind(this, 'Contact')}
                  color='inherit'
                  >
                    Notification
                  </Button>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup='true'
                  color='inherit'
                  >
                    Log Out
                  </Button>
               
              </div> 

            </Toolbar>

          </AppBar>
          : <AppBar position='static'>

            <Toolbar>
              <p>ammar</p>
            </Toolbar>
          </AppBar>}

      </Fragment>
    )
  }
}

export default withStyles(styles)(ExpertHeader)
