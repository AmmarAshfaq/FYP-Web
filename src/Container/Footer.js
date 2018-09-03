import React, { Component, Fragment } from 'react'
import { Paper, Tabs,  Button } from '@material-ui/core'
import {withStyle} from '@material-ui/core/styles'
export default class Footer extends Component {
  render () {
    return (
      <Fragment>
        {/* <Paper style={{ height: 200, margin: 10, textAlign: 'center' }}>

          <Typography variant='display2' style={{ margin: 5,paddingTop:30,paddingBottom:10 }}>
Grow With Us
          </Typography>
          <Typography variant='headline' style={{ margin: 5 }}>
            Together Let's Build SAES As A Resource For Agriculture
          </Typography>

        </Paper> */}
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
      </Fragment>
    )
  }
}
