import React, { Component } from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import pasticide from '../../images/Pasticide.jpg'
import slider5 from '../../images/slider5.jpg'
import {browserHistory} from 'react-router'

import tractor from '../../images/Machinery/tractor1.jpg'

export default class CompanyMain extends Component {
  goTo = item => {
    if(item === 'Pesticide'){
      browserHistory.push('/addpesticide')
    }else if(item === 'Machinery'){
      browserHistory.push('/addmachinery')
      
    }else if(item === 'Fertilizer'){
      browserHistory.push('/addfertilizer')
      
    }
  }
  render () {
    return (
      <div style={{backgroundColor: '#F5FCFF'}}>
        {/* // <Grid container sm>
      //   <Grid item sm>
      //     <Paper style={styles.Paper}>
      //       Pesticide
      //     </Paper>

      //   </Grid>
      //   <Grid item sm>
      //     <Paper style={styles.Paper}>
      //       Fertilizer
      //     </Paper>
      //   </Grid>

      // </Grid> */}
        <Grid container sm>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 250,
                marginTop: 80
              }}
              onClick={()=>this.goTo('Pesticide')}
            >
              <CardMedia
                style={styles.media}
                image={pasticide}
                title='Add Pesticide'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                  Add Pesticide
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 10,
                marginTop: 80
              }}
              onClick={()=>this.goTo('Machinery')}
            >
              <CardMedia
                style={styles.media}
                image={tractor}
                title='Add Machinery'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                  Add Machinery
                </Typography>

              </CardContent>
            </Card>
          </Grid>

        </Grid>
        <Grid container sm>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 250,
                marginTop: 10
              }}
              onClick={()=>this.goTo('Fertilizer')}
            >
              <CardMedia
                style={styles.media}
                image={slider5}
                title='Add Fertilizer'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                  Add Fertilizer
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  textDec: {
    textAlign: 'center'
  }
}
