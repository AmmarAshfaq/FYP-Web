import ActionTypes from '../constant/allCropConstant'
import {browserHistory} from 'react-router'

const ROOT_URL = 'http://localhost:8080'
let getToken
// function requestProcess(){
//   return dispatch =>{
//     dispatch({
//       type:ActionTypes.LOADER_PROCESS,

//     })
//   }
// }
export function loaderProcessDone(){
  return dispatch =>{
    dispatch({
      type:ActionTypes.LOADER_UN_PROCESS
    })
  }
}
export function getAllCropAction () {
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      }
    })
    const getData = await result.json()
    // console.log(getData.crops)
    dispatch(getCrop(getData.crops))
  }
}

function getCrop (obj) {
  return {
    type: ActionTypes.GET_ALL_CROP,
    payload: obj
  }
}

export function getSpecificCrop (obj) {
  getToken = localStorage.getItem('token')
  
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/specific`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(obj)
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch({
      type: ActionTypes.LOADER_PROCESS
    })
    dispatch(getCropByID(getData.cropDetail))
    browserHistory.push('/specificCrop')
    
  }
}

function getCropByID (getData) {
  return {
    type: ActionTypes.SPECIFIC_CROP,
    payload: getData
  }
}

export function getSpecificProblem (obj) {
  getToken = localStorage.getItem('token')
  // console.log(obj)
  let objData = {
    _id: obj
  }
  console.log(objData)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/specific`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })
    const getData = await result.json()
    // console.log(getData.problemDetail)
    dispatch({
      type: ActionTypes.LOADER_PROCESS
    })
    dispatch(getProblemById(getData.problemDetail))
  }
}
export function getAllProblemAction () {
  // console.log(obj)
  getToken = localStorage.getItem('token')
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      }
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(getProblem(getData.problems))
  }
}
function getProblem (obj) {
  return {
    type: ActionTypes.GET_ALL_PROBLEM,
    payload: obj
  }
}
function getProblemById (obj) {
  return {
    type: ActionTypes.SPECIFIC_PROBLEM,
    payload: obj
  }
}
