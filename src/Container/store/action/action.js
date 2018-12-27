import ActionTypes from '../constant/constant'
export function selectManu (itemReceive) {
  return dispatch => {
    dispatch({
      type: ActionTypes.MENU,
      itemSelect: itemReceive
    })
  }
}



export function openModel (itemReceive) {
  return dispatch => {
    dispatch({
      type: ActionTypes.OPEN,
      itemSelect: itemReceive,
    })
  }
}

