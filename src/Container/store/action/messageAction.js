import ActionTypes from '../constant/messageConstant'
var socket = require('socket.io-client')('http://localhost:8080')
const ROOT_URL = 'http://localhost:8080'
let getToken

export function ConnectWithSocket (data) {
  
  return dispatch => {
    console.log(data)
    socket.emit('message', data)
    socket.on(data.conversationId, function (obj) {
      dispatch(listenMsg(obj))
    })
  }
}

export function getAllMessage (obj) {
  getToken = localStorage.getItem('token')
  
  return async dispatch => {
    dispatch(processLoad())
    const result = await fetch(
      `${ROOT_URL}/privateMessage/myconversations?id=${obj}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: getToken
        }
      }
    )
    const getData = await result.json()
    dispatch(getAllMsg(getData))
    dispatch(processDone())
  }
}

function getAllMsg (data) {
  return {
    type: ActionTypes.GET_ALL_MESSAGE,
    payload: data
  }
}

export function getSpecificMessages (objId ,obj ) {
  getToken = localStorage.getItem('token')

  console.log(obj)
  return async dispatch => {
    dispatch(processLoad())
    const result = await fetch(
      `${ROOT_URL}/privateMessage/conversation/${objId}`,
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
    dispatch(getAllSpecificMsg(getData,obj))
    dispatch(processDone())
  }
}

function processLoad () {
  return {
    type: ActionTypes.LOAD_PROCESS
  }
}

function processDone () {
  return {
    type: ActionTypes.LOAD_DONE
  }
}
function getAllSpecificMsg (data,obj) {
  return {
    type: ActionTypes.GET_ALL_SPECIFIC,
    payload: data,
    userSelectForMsg:obj
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

export function userSelectMsgNull(){
  return dispatch =>{
    dispatch({
      type:ActionTypes.START_MESSAGE_NULL
    })
  }
}
