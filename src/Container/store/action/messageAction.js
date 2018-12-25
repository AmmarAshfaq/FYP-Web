import ActionTypes from '../constant/messageConstant'
var socket = require('socket.io-client')('http://localhost:8080')
const ROOT_URL = 'http://localhost:8080'
let getToken

export function ConnectWithSocket (data) {
  // let data = {
  //   conversationId: 'F1'
  // }
  // console.log(data)
  return dispatch => {
    console.log(data)
    // console.log('Connect with server');
    socket.emit('message', data)
    socket.on(data.conversationId, function (obj) {
      // console.log(obj)
      dispatch(listenMsg(obj))
    })
  }
}

export function getAllMessage (obj) {
  getToken = localStorage.getItem('token')

  console.log(obj)
  return async dispatch => {
    const result = await fetch(
      `${ROOT_URL}/privateMessage/myconversations?id=${obj}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: getToken
        }
        // body:JSON.stringify()
      }
    )
    const getData = await result.json()
    // console.log(getData)
    dispatch(getAllMsg(getData))
  }
}

function getAllMsg (data) {
  return {
    type: ActionTypes.GET_ALL_MESSAGE,
    payload: data
  }
}

export function getSpecificMessages (obj) {
  getToken = localStorage.getItem('token')

  console.log(obj)
  return async dispatch => {
    const result = await fetch(
      `${ROOT_URL}/privateMessage/conversation/${obj}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: getToken
        }
      }
    )
    const getData = await result.json()
    console.log(getData)
    dispatch(getAllSpecificMsg(getData))
  }
}

function getAllSpecificMsg (data) {
  return {
    type: ActionTypes.GET_ALL_SPECIFIC,
    payload: data
  }
}

function listenMsg (data) {
  return {
    type: ActionTypes.LISTEN_MESSAGE,
    payload: data
  }
}

export function startMessage (obj) {
  console.log(obj)
  return dispatch => {
    dispatch({
      type: ActionTypes.START_MESSAGE,
      payload: obj
    })
  }
}
