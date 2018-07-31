import ActionTypes from '../constant/constant'
export function selectManu (itemReceive) {
  // console.log(itemReceive)
  return dispatch => {
    dispatch({
      type: ActionTypes.MENU,
      itemSelect: itemReceive
    })
  }
}

export function changeNavbar (componentChange) {
  // console.log(componentChange)
  return dispatch => {
    dispatch({
      type: ActionTypes.CHANGE,
      componentList: componentChange
    })
  }
}
