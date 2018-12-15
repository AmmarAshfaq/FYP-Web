import React, { Component } from 'react'
import { Paper, Tabs, Button } from '@material-ui/core'
import { connect } from 'react-redux'
// import {changeNavbar} from './store/action/action'
class Footer extends Component {
  render () {
    return (
      <Paper>
             <Tabs
            
              centered
              style={{
                backgroundColor: '#00806d',
                color: '#fff'
              }}
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
      // <Fragment>
      //   {this.props.footerChange === 'Main' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{ backgroundColor: '#00806d', color: '#fff' }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : this.props.footerChange === 'FarmerHome' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{ backgroundColor: '#00806d', color: '#fff' }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : this.props.footerChange === 'BuyerHome' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{ backgroundColor: '#00806d', color: '#fff' }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : this.props.footerChange === 'CompanyHome' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{
      //           backgroundColor: '#00806d',
      //           color: '#fff'
      //         }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : this.props.footerChange === 'ExpertHome' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{
      //           backgroundColor: '#00806d',
      //           color: '#fff'
      //         }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : this.props.footerChange === 'AdminHome' ? (
      //     <Paper>
      //       <Tabs
      //         // indicatorColor='primary'
      //         // textColor='inherit'
      //         centered
      //         style={{
      //           backgroundColor: '#00806d',
      //           color: '#fff'
      //         }}
      //       >
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://m.facebook.com/Smart-Agriculture-Extenstion-Services-207468970110058/'
      //         >
      //           Facebook
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://mobile.twitter.com/extenstion'
      //         >
      //           Twitter
      //         </Button>
      //         <Button
      //           style={{ color: '#fff', margin: 4 }}
      //           href='https://www.instagram.com/p/Bl2VkrVBiyV/?utm_source=ig_share_sheet&igshid=1blhhqhee3ygy'
      //         >
      //           Instagram
      //         </Button>
      //       </Tabs>
      //     </Paper>
      //   ) : null}
      // </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    footerChange: state.reducer.componentUpdate
  }
}
export default connect(
  mapStateToProps,
  null
)(Footer)
