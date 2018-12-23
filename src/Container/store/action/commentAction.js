import ActionTypes from '../constant/commentConstant'
const ROOT_URL = 'http://localhost:8080'
let getToken
export function addCommentAction (obj) {
  //   console.log(obj)
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/comment/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(obj)
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(addComment(getData.comments))
  }
}

export function deleteCommentAction (obj) {
  console.log(obj)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/comment/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })
    const getData = await result.json()
    console.log(getData)
  }
}
export function updateCommentAction (obj) {
  getToken = localStorage.getItem('token')

  console.log(obj)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/comment/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })
    const getData = await result.json()
    //   console.log(getData)
    dispatch(updateComment(getData.comments))
  }
}
export function selectCommentId (obj) {
  return dispatch => {
    //   console.log(obj)
    dispatch({
      type: ActionTypes.SELECT_ID,
      payload: obj
    })
  }
}
function addComment (obj) {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: obj
  }
}

function updateComment (obj) {
  return {
    type: ActionTypes.UPDATE_COMMENT,
    payload: obj
  }
}
