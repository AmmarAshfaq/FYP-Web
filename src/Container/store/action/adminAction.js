import ActionTypes from '../constant/adminConstant'
export function selectPanel (itemReceive) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SELECT_PANEL,
      itemSelect: itemReceive
    })
  }
}



