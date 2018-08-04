import React, { Component, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core'
// import history from '../History'
import { withStyles } from '@material-ui/core/styles'
import { browserHistory } from 'react-router'
// import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectManu } from './store/action/action'
const styles = theme => ({
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 }
})
class DrawerOpenClose extends Component {
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
  changeScreen = argument => {
    //  browserHistory.push('/login')
    // console.log(argument)
    if (argument === 'Main') {
      browserHistory.push('/')
      console.log(argument)
    } else if (argument === 'Company') {
      browserHistory.push('/login')
    } else if (argument === 'Expert') {
      browserHistory.push('/login')
    } else if (argument === 'Farmer') {
      browserHistory.push('/login')
    } else if (argument === 'Buyer') {
      browserHistory.push('/login')
    } else if (argument === 'Contact') {
      browserHistory.push('/contact')
    } else if (argument === 'About') {
      browserHistory.push('/about')
    }
    this.props.itemAdd(argument)
    this.setState({ anchorEl: null })
  }
  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    // console.log(this.props.itemList)
    return (
      <Fragment>
        {this.state.toggle === 'Main'
          ? <AppBar position='fixed' style={{ flexGrow: 1 }}>

            <Toolbar>
              <Avatar
                alt='Logo'
                src={require('../images/logo2.jpg')}
                className={classes.avatarStyle}
                />
              <div className={classes.titleStyle}>
                <Typography variant='title' color='inherit'>

                    SAES
                  </Typography>
                <Typography variant='Subheading' color='inherit'>
                    Smart Agriculture Extension Services
                  </Typography>
              </div>
              <div>
                <Button
                  onClick={this.changeScreen.bind(this, 'Main')}
                  color='inherit'
                  >
                    Home
                  </Button>
                <Button
                  onClick={this.changeScreen.bind(this, 'About')}
                  color='inherit'
                  >
                    About
                  </Button>
                <Button
                  onClick={this.changeScreen.bind(this, 'Contact')}
                  color='inherit'
                  >
                    Contact
                  </Button>
                <Button
                style={{position:'relative'}}
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup='true'
                  onClick={this.handleClick}
                  color='inherit'
                  >
                    Services
                  </Button>
                <Menu
                style={{position:'absolute',top:40}}
                  id='simple-menu'
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  >
                  <MenuItem onClick={this.changeScreen.bind(this, 'Farmer')}>
                      Farmer
                    </MenuItem>
                  <MenuItem onClick={this.changeScreen.bind(this, 'Company')}>
                      Company
                    </MenuItem>
                  <MenuItem onClick={this.changeScreen.bind(this, 'Expert')}>
                      Expert
                    </MenuItem>
                  <MenuItem onClick={this.changeScreen.bind(this, 'Buyer')}>
                      Buyer
                    </MenuItem>
                    s{' '}
                </Menu>
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
function mapStateToProp (state) {
  // console.log(state.reducer.item)
  return {
    itemList: state.reducer
  }
}
function mapDispatchToProp (dispatch) {
  return {
    itemAdd: inputData => {
      dispatch(selectManu(inputData))
    }
  }
}

export default compose(withStyles(styles), connect(mapStateToProp, mapDispatchToProp))(
  DrawerOpenClose
)
