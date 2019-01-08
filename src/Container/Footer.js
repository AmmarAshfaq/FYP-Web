import React, { Component } from 'react'
import { Paper, Tabs, Button } from '@material-ui/core'

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
    )
  }
}

export default Footer
