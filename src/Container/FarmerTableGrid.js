import React, { Component } from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import cropRates from '../Component/AllData/CropRates'
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import { compose } from 'redux'
import IconButton from '@material-ui/core/IconButton'
import { openModel } from '../Container/store/action/action'
import AddProblem from '../Component/Farmer/AddProblem'
import AddCrop from '../Component/Farmer/AddCrop'
import {
  deleteCropAction,
  deleteProblemAction
} from '../Container/store/action/farmerAction'

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
    // minWidth: 700,
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
  }
  handleClickOpen = (obj, index) => {
    let objSet = {
      toggle: true,
      specificDialog: obj,
      id: index
    }

    console.log(objSet)
    this.props.selectValue(objSet)
  }
  handleDelete = (obj, index) => {
    // console.log(obj)
    if (obj === 'Crops') {
      this.props.deleteSpecificData(index)
    } else if (obj === 'Problem') {
      // this.props.d
      this.props.deleteProblemData(index)
    }
  }
  render () {
    const { classes, data, typeSelect } = this.props
    let i = 0
    return (
      <div className={classes.table}>
        <Table >
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
                {' '}
                Name
              </CustomTableCell>
              {typeSelect === 'Crops' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Price
                </CustomTableCell>
              ) : null}

              {typeSelect === 'Problem' ? (
                <CustomTableCell numeric className={classes.columnWidth}>
                  Description
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Problem' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Audio
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Crops' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Weight
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Crops' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Date
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Crops' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Transport
                </CustomTableCell>
              ) : null}
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
                <TableRow className={classes.row} keys={n._id}>
                  <CustomTableCell numeric className={classes.columnNo}>
                    {++i}
                  </CustomTableCell>
                  <CustomTableCell numeric className={classes.columnNo}>
                    {`${n.name.substring(0, 15)}....`}
                  </CustomTableCell>
                  {typeSelect === 'Crops' ? (
                    <CustomTableCell numeric className={classes.columnNo}>
                      {`Rs. ${n.price}`}{' '}
                    </CustomTableCell>
                  ) : null}
                  {typeSelect === 'Problem' ? (
                    <CustomTableCell numeric className={classes.columnWidth}>
                      {`${n.description.substring(0, 50)}.....`}
                    </CustomTableCell>
                  ) : null}
                  {typeSelect === 'Problem' ? (
                    <CustomTableCell
                      className={classes.columnWidth}
                    >{`${n.audio_url.substring(0, 50)}.....`}</CustomTableCell>
                  ) : null}
                  {typeSelect === 'Crops' ? (
                    <CustomTableCell className={classes.columnWidth}>{`${
                      n.wieght
                    }`}</CustomTableCell>
                  ) : null}
                  {typeSelect === 'Crops' ? (
                    <CustomTableCell className={classes.columnWidth}>{`${
                      n.date
                    }`}</CustomTableCell>
                  ) : null}
                  {typeSelect === 'Crops' ? (
                    <CustomTableCell className={classes.columnWidth}>{`${
                      n.transport
                    }`}</CustomTableCell>
                  ) : null}
                  <CustomTableCell numeric className={classes.columnNo}>
                    <Avatar
                      alt='Adelle Charles'
                      src={n.image_url}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </CustomTableCell>
                  <CustomTableCell
                    numeric
                    className={classes.columnNo}
                    onClick={this.handleDelete.bind(this, typeSelect, n._id)}
                  >
                    <IconButton aria-label='Delete'>
                      <DeleteIcon fontSize='large' />
                    </IconButton>
                  </CustomTableCell>
                  <CustomTableCell
                    numeric
                    className={classes.columnNo}
                    onClick={this.handleClickOpen.bind(this, typeSelect, n._id)}
                  >
                    <IconButton aria-label='Update'>
                      <UpdateIcon fontSize='large' />
                    </IconButton>
                  </CustomTableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <AddProblem />
        <AddCrop />
      </div>
    )
  }
}

function mapDipatchToProps (dispatch) {
  return {
    selectValue: data => {
      dispatch(openModel(data))
    },
    deleteSpecificData: data => {
      dispatch(deleteCropAction(data))
    },
    deleteProblemData: data => {
      dispatch(deleteProblemAction(data))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    null,
    mapDipatchToProps
  )
)(TableGrid)
