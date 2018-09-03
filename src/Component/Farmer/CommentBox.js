import React,{Component} from 'react';
import {Grid,Paper,Typography,ButtonBase} from '@material-ui/core'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import ProblemSolution from '../../Container/ProblemSlider'
const styles = theme =>({
    leftMargin: {
        marginLeft: 10,
        marginRight: 10,
        padding:10
      },
      paddingText: {
        padding: 10
      }
})
class CommentBox extends Component{
    render(){
        const {classes} = this.props
return(
    <Grid
    item
    xs={12}
    container
    spacing={24}
    className={classes.leftMargin}
  >
    <Grid item xs={8}>
        <Grid item xs={12}>
          <Typography
            variant='display1'
            gutterBottom
            noWrap
            className={classes.paddingText}
          >
            Comments
          </Typography>
          <hr/>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={16}>
        <Grid item>
            <img className={classes.img} alt="complex" src={require('../../images/malik.jpg')} width='60' height='60' />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="title">
                Shams
              </Typography>
              <Typography gutterBottom>Hi Ammar</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: 'pointer' }}>Reply</Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={16}>
        <Grid item>
            <img className={classes.img} alt="complex" src={require('../../images/ammar.jpg')} width='60' height='60'/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="title">
                Ammar
              </Typography>
              <Typography gutterBottom>Hi Shams</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: 'pointer' }}>Reply</Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>

        </Grid>
       


    </Grid>
    <Grid item xs={4}>
    </Grid>
  </Grid>
  
)
    }
}
export default withStyles(styles)(CommentBox);