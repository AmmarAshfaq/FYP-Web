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
import { connect } from 'react-redux'
import { compose } from 'redux'
import IconButton from '@material-ui/core/IconButton'
import { openModel } from '../Container/store/action/action'
import AddPesticide from '../Component/Company/AddPesticide'
import AddMachinery from '../Component/Company/AddMachinery'
import AddFertilizer from '../Component/Company/AddFertilizer'
import Loader from 'react-loader-spinner'

import {
  deleteMachineryAction,
  deleteFertilizerAction,
  deletePesticideAction
} from '../Container/store/action/companyAction'

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
    width: '100%'
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
  
  handleClickOpen = (obj, index) => {
    let objSet = {
      toggle: true,
      specificDialog: obj,
      id: index
    }
    console.log(objSet)
    this.props.selectValue(objSet)
  }
  handleDelete = (obj, index, companyIndex) => {
    // console.log(obj,"Type",'id',index)
    if (obj === 'Fertilizer') {
      // console.log(index,companyIndex)
      let objData = {
        _id: index
      }
      this.props.deleteFertilizer(objData)
    } else if (obj === 'Machinery') {
      // console.log(index,companyIndex)
      let objData = {
        machineId: index,
        companyId: companyIndex
      }
      this.props.deleteMachinery(objData)
    } else if (obj === 'Pesticide') {
      // console.log(index,companyIndex)
      let objData = {
        pesticideId: index,
        companyId: companyIndex
      }
      this.props.deletePesticide(objData)
    }
  }
  render () {
    const { classes, data, typeSelect } = this.props
    let i = 0
    return (
      // console.log(this.props)
      <div className={classes.table}>
        <Table>
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
              <CustomTableCell numeric className={classes.columnNo}>
                Price
              </CustomTableCell>
              {typeSelect === 'Machinery' ? (
                <CustomTableCell numeric className={classes.columnWidth}>
                  Description
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Pesticide' ? (
                <CustomTableCell numeric className={classes.columnWidth}>
                  Description
                </CustomTableCell>
              ) : null}
              {/* <CustomTableCell numeric className={classes.columnNo}>
                Contact No
              </CustomTableCell> */}
              {typeSelect === 'Fertilizer' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Product
                </CustomTableCell>
              ) : null}
              {typeSelect === 'Fertilizer' ? (
                <CustomTableCell numeric className={classes.columnNo}>
                  Application
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
          {!this.props.loader ? (
            <TableBody>
              {data.map((n, key) => {
                return (
                  <TableRow className={classes.row} key={n.name}>
                    <CustomTableCell numeric className={classes.columnNo}>
                      {++i}
                    </CustomTableCell>
                    {typeSelect === 'Fertilizer' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnNo}
                      >{`${n.name.substring(0, 15)}....`}</CustomTableCell>
                    ) : null}
                    {typeSelect === 'Machinery' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnNo}
                      >{`${n.machineName.substring(
                          0,
                          15
                        )}....`}</CustomTableCell>
                    ) : null}
                    {typeSelect === 'Pesticide' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnNo}
                      >{`${n.pesticideName.substring(
                          0,
                          15
                        )}....`}</CustomTableCell>
                    ) : null}
                    <CustomTableCell numeric className={classes.columnNo}>
                      {`Rs. ${n.price.substring(0, 15)}`}{' '}
                    </CustomTableCell>
                    {typeSelect === 'Machinery' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnWidth}
                      >{`${n.machineDescription.substring(
                          0,
                          20
                        )}.....`}</CustomTableCell>
                    ) : null}
                    {typeSelect === 'Pesticide' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnWidth}
                      >{`${n.pesticideDescription.substring(
                          0,
                          20
                        )}.....`}</CustomTableCell>
                    ) : null}
                    {typeSelect === 'Fertilizer' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnNo}
                      >{`${n.product.substring(0, 15)}....`}</CustomTableCell>
                    ) : null}
                    {typeSelect === 'Fertilizer' ? (
                      <CustomTableCell
                        numeric
                        className={classes.columnNo}
                      >{`${n.application.substring(
                          0,
                          15
                        )}....`}</CustomTableCell>
                    ) : null}
                    <CustomTableCell numeric className={classes.columnNo}>
                      <Avatar
                        alt='Adelle Charles'
                        src={n.image_url}
                        className={classNames(
                          classes.avatar,
                          classes.bigAvatar
                        )}
                      />
                    </CustomTableCell>
                    <CustomTableCell
                      numeric
                      className={classes.columnNo}
                      onClick={this.handleDelete.bind(
                        this,
                        typeSelect,
                        n._id,
                        n.companyId
                      )}
                    >
                      <IconButton aria-label='Delete'>
                        <DeleteIcon fontSize='large' />
                      </IconButton>
                    </CustomTableCell>
                    <CustomTableCell
                      numeric
                      className={classes.columnNo}
                      onClick={this.handleClickOpen.bind(
                        this,
                        typeSelect,
                        n._id
                      )}
                    >
                      <IconButton aria-label='Update'>
                        <UpdateIcon fontSize='large' />
                      </IconButton>
                    </CustomTableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan='8'>
                  <Typography
                    variant='display1'
                    gutterBottom
                    style={{ textAlign: 'center' }}
                  >
                    <Loader type='Oval' color='#000' height={50} width={50} />
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
        {this.props.errorShow.error
          ? this.showAlertMessage(this.props.errorShow.error.message)
          : null}
        <AddPesticide />
        <AddFertilizer />
        <AddMachinery />
      </div>
    )
  }
}

function mapDipatchToProps (dispatch) {
  return {
    selectValue: data => {
      dispatch(openModel(data))
    },
    deleteMachinery: data => {
      dispatch(deleteMachineryAction(data))
    },
    deleteFertilizer: data => {
      dispatch(deleteFertilizerAction(data))
    },
    deletePesticide: data => {
      dispatch(deletePesticideAction(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    loader: state.companyReducer.upload,
    errorShow: state.companyReducer.error
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDipatchToProps
  )
)(TableGrid)
