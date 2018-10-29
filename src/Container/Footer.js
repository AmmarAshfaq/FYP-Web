import React, { Component, Fragment } from 'react'
import { Paper, Tabs,  Button } from '@material-ui/core'
import {connect} from 'react-redux';
// import {changeNavbar} from './store/action/action'
 class Footer extends Component {
  render () {
    return (
      <Fragment>
     {(this.props.footerChange === 'Main' || this.props.footerChange === 'FarmerHome' || this.props.footerChange === 'BuyerHome' || this.props.footerChange === 'CompanyHome' || this.props.footerChange === 'ExpertHome')?
        <Paper>
          <Tabs
            indicatorColor='primary'
            textColor='inherit'
            centered
            style={{ backgroundColor: '#3f51b5', color: '#fff' }}
          >
            <Button
              style={{ color: '#fff', margin: 4 }}
              href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
            >
              Facebook
            </Button>
            <Button
              style={{ color: '#fff', margin: 4 }}
              href='https://mobile.twitter.com/extenstion'
            >
              Twitter
            </Button>
            <Button
              style={{ color: '#fff', margin: 4 }}
              href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
            >
              Instagram
            </Button>
          </Tabs>
        </Paper>
        :
        null
     }
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
footerChange:state.reducer.componentUpdate
  }
}
export default connect(mapStateToProps,null)(Footer);