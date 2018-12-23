import ActionTypes from '../constant/allCropConstant'
const ROOT_URL = 'http://localhost:8080'

let getToken
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
    dispatch(getCropByID(getData.cropDetail))
  }
}

function getCropByID(getData){
return{
    type:ActionTypes.SPECIFIC_CROP,
    payload:getData
}
}