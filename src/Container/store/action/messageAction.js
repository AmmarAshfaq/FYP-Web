import ActionTypes from '../constant/constant'
var socket = require('socket.io-client')('http://localhost:8080')

export function ConnectWithSocket (data) {
  // let data = {
  //   conversationId: 'F1'
  // }
  console.log(data)
  return dispatch => {
    console.log(data)
    // console.log('Connect with server');
    socket.emit('message', data)
  }
}


export function getAllMessage(){
  return dispatch =>{
    
  }
}