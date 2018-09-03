import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Badge
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {changeNavbar} from '../../Container/store/action/action'
import { signoutUser } from '../../Container/store/action/authAction';

const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  buttonStyle: { marginRight: 5, position: 'relative' }
  
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

  
  handleLogOut=(passParam)=>{

    // browserHistory.push('/login')

  this.props.changeRoute(passParam)  
  this.props.signoutUserComp()
  }
 
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
                  <Badge color='secondary' badgeContent={4}>
                <Button color='inherit' className={classes.buttonStyle}>
                  Messege
                </Button>
              </Badge>

              <Badge color='secondary' badgeContent={6}>
                <Button color='inherit' className={classes.buttonStyle}>
                  Notification
                </Button>
              </Badge>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup='true'
                  color='inherit'
                  onClick={this.handleLogOut.bind(this,'Main')}
                  >
                    Log Out
                  </Button>
               
              </div> 

            </Toolbar>

          </AppBar>
          

      </Fragment>
    )
  }
}
function mapDispatchToProps(dispatch){
  return{
changeRoute : (passParam)=>{
  dispatch(changeNavbar(passParam))
},
signoutUserComp:()=>{
  dispatch(signoutUser)
}
  }
}

export default compose( withStyles(styles,{name:'ExpertHeader'}),connect(null,mapDispatchToProps))(ExpertHeader)
