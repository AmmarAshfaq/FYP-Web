import React,{Component} from 'react'
import {
   
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Grid,
    Typography,
  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import cropRates from '../Component/AllData/CropRates'
const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      textAlign: 'left',
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14,
      textAlign: 'left'
    }
  }))(TableCell)  

  const styles = theme => ({
    
   
    table: {
      minWidth: 700,
      overflowY: 'auto'
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default
      }
    },
    margin: {
      margin: theme.spacing.unit
    },
    
  })
class TableGrid extends Component{
    render(){
    const {classes}= this.props
    let i = 0
return(
    <Table className={classes.table}>

                  <TableHead>
                
                    <TableRow>
                      <TableCell colSpan='4'>
                        <Typography
                          variant='display1'
                          gutterBottom
                          style={{ textAlign: 'center' }}

                        >
                        Machinery List
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                      <CustomTableCell numeric>No.</CustomTableCell>
                      <CustomTableCell numeric>Name</CustomTableCell>
                      <CustomTableCell numeric>Price</CustomTableCell>
                      <CustomTableCell numeric>Weight</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cropRates.map((n, key) => {
                      return (
                        <TableRow className={classes.row} key={n.name}>
                          <CustomTableCell numeric>
                            {++i}
                          </CustomTableCell>
                          <CustomTableCell numeric>{n.name}</CustomTableCell>
                          <CustomTableCell numeric>{n.price}</CustomTableCell>
                          <CustomTableCell numeric>{n.weight}</CustomTableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
)
}
}
export default withStyles(styles)(TableGrid);