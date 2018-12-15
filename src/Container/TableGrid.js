import React, { Component } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux';
import { compose } from 'redux';
import IconButton from '@material-ui/core/IconButton'
import { openModel} from '../Container/store/action/action';
import AddPesticide from '../Component/Company/AddPesticide';
import AddMachinery from '../Component/Company/AddMachinery';
import AddFertilizer from '../Component/Company/AddFertilizer';

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
    // minWidth: ,
    overflowY: 'auto',
    width:'100%'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 40,
    height: 40
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  margin: {
    margin: theme.spacing.unit
  },
  columnWidth: {
    width: '25%'
  },
  columnNo: {
    width: '10%'
  }
})
class TableGrid extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.data)
  }
  handleClickOpen = (obj) => {
    let objSet = {
      toggle: true,
      specificDialog: obj
    }
    // console.log(objSet)
    this.props.selectValue(objSet)
  }
  render () {
    const { classes, data, typeSelect } = this.props
    let i = 0
    return (
      // console.log(this.props)
      <div  className={classes.table}>
        <Table
        
       
        >

          <TableHead>

            <TableRow>
              <TableCell colSpan='8'>
                <Typography
                  variant='display1'
                  gutterBottom
                  style={{ textAlign: 'center' }}
                >
                  {`${typeSelect}`} List
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <CustomTableCell numeric className={classes.columnNo}>
                No.
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                {' '}Name
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                Price
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnWidth}>
                Description
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                Contact No
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                Image
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                Delete
              </CustomTableCell>
              <CustomTableCell numeric className={classes.columnNo}>
                Update
              </CustomTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n, key) => {
              return (
                <TableRow className={classes.row} key={n.name}>
                  <CustomTableCell numeric className={classes.columnNo}>
                    {++i}
                  </CustomTableCell>
                  <CustomTableCell
                    numeric
                    className={classes.columnNo}
                  >{`${n.name.substring(0, 15)}....`}</CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo}>
                    {`Rs. ${n.price}`}{' '}
                  </CustomTableCell>

                  <CustomTableCell
                    numeric
                    className={classes.columnWidth}
                  >{`${n.description.substring(0, 50)}.....`}</CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo}>
                    {n.contactNo}
                  </CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo}>
                    <Avatar
                      alt='Adelle Charles'
                      src={require('../images/Machinery/tractor.jpg')}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo}>
                    <IconButton aria-label='Delete'>
                      <DeleteIcon fontSize='large' />
                    </IconButton>
                  </CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo} onClick={this.handleClickOpen.bind(this,typeSelect)}>
                    <IconButton aria-label='Update'>
                      <UpdateIcon fontSize='large'  />
                    </IconButton>
                  </CustomTableCell>

                </TableRow>
              )
            })}
          </TableBody>
        
        </Table>
          <AddPesticide />
      <AddFertilizer />
      <AddMachinery />
      </div>
      
    )
  }
}

function mapDipatchToProps(dispatch){
  return{
    selectValue: data => {
      dispatch(openModel(data))
    },
  }
  
}
export default compose(withStyles(styles),connect(null,mapDipatchToProps))(TableGrid);
