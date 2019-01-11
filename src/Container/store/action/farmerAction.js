import ActionTypes from '../constant/farmerConstant'

const ROOT_URL = 'http://localhost:8080'
let getToken

export function notificationAction (obj) {
  let objConfig = {
    notification: {
      title: 'Firebase',
      body: 'Firebase is awsone',
      click_action: 'http://localhost:3000/',
      icon: ''
    },
    to: obj
  }
  console.log(obj)
  console.log(objConfig)
  return async dispatch => {
    const result = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization:
          'key=AAAAn7be3h4:APA91bHW2zLA4PJb3lBcC3JQnkGe8qELWP7YL23Nh4HXswuiN7ZQwyeiAAIQkzp--g0RwAvpssMSumKOjRkzLssi-GOHHln1KSUhjraRUHY__iMZeDU3T7OXpyjLts45ojhDdvlinosm'
      },
      body: JSON.stringify(objConfig)
    })
    const getData = await result.json()
    console.log(getData)
  }
}
export function addCropAction (obj) {
  getToken = localStorage.getItem('token')
  let data = new FormData()
  data.append('image_url', obj.image_url)
  data.append('name', obj.name)
  data.append('price', obj.price)
  data.append('transport', obj.transport)
  data.append('wieght', obj.wieght)
  data.append('date', obj.date)
  data.append('farmerId', obj.farmerId)
  data.append('type', obj.type)
  console.log(data)
  return async dispatch => {
    dispatch(processProgress())
    const result = await fetch(`${ROOT_URL}/crop/add`, {
      method: 'POST',
      headers: {
        authorization: getToken,
        Accept: 'application/json'
      },
      body: data
    })
    const getData = await result.json()
    console.log(getData)
    if (getData.error) {
      console.log(getData.error)
      dispatch(errorMessage(getData.error.message))
      dispatch(processDone())
    } else {
      console.log(getData.type)
      dispatch(addCropData(getData))
      dispatch(notificationCrop(getData))

      dispatch(processDone())
      dispatch(errorEmpty())
    }
    // notificationAdd(getData)
  }
}
/// ///////////////////// Testing //////////////////

// function notificationAdd (obj) {
//   // getToken = localStorage.getItem('token')
//   console.log(obj)
//   const objValue = {
//     notification:{
//       title:obj.name,
//       body:obj.price,
//       icon:obj.image_url
//     },
//     to:"dve_HSqLKP4:APA91bEbqluJTQQuo_byyoqeQB4eymnKcYb9fguWi3OeoVZXu2yXdamPJXWFCyObh_Rf8woxYJ50DMoNvpB_C6cXP6X5KwuRgJmPieZg5T582-qMzTT5O02D6nQvZQf04MzUzFgTaNxX"
//   }

//   return async dispatch => {
//     const result = await fetch('https://fcm.googleapis.com/fcm/send', {
//       method: 'POST',
//       headers: {
//         Authorization:
//           'key=AAAA5lj0eGk:APA91bF-zRhEbIc7WttkmRtdN4ExH60PJoIUZUpxt0Rrrsx4d_cnyrlXutsjfdF5DXRwAwQwflmTTHsOgrf7qrt6AClzW0CtOlGeo9IA_joH-YdDobgT46kj1wOunujkljyRKQDqMJDa',
//         'Content-Type': 'application/json; charset=utf-8'
//       },
//       body: JSON.stringify(objValue)
//     })
//     // const getData
//   }
// }

/// ///////////////////////////////////////////////////////////////////////////////
function processProgress () {
  return {
    type: ActionTypes.PROCESS_PROGRESS
  }
}
function processDone () {
  return {
    type: ActionTypes.PROCESS_DONE
  }
}
// function addToBuyerNotification (obj) {
//   return {
//     type: ActionTypes.NOTIFICATION_CROP,
//     payload: obj
//   }
// }
export function addProblemAction (obj) {
  getToken = localStorage.getItem('token')

  // console.log(getToken, 'asddddddddddsadss')

  let data = new FormData()
  data.append('image_url', obj.image)
  data.append('audio_url', obj.audio)
  data.append('farmerId', obj.farmerID)
  data.append('description', obj.problemDescription)
  data.append('name', obj.problemName)
  data.append('type', obj.type)
  console.log(data)
  return async dispatch => {
    dispatch(processProgress())

    const result = await fetch(`${ROOT_URL}/problem/add`, {
      method: 'POST',
      headers: {
        authorization: getToken
      },
      body: data
    })

    const getData = await result.json()
    // console.log(getData)
    if (getData.error) {
      console.log(getData.error.message.error)
      dispatch(errorMessage(getData.error.message))
      dispatch(processDone())
    } else {
      dispatch(addProblemData(getData))
      dispatch(notificationProblem(getData))
      dispatch(processDone())
      dispatch(errorEmpty())
    }
  }
}
function notificationProblem (add) {
  return {
    type: ActionTypes.NOTIFICATION_PROBLEM,
    payload: add
  }
}
function notificationCrop (add) {
  return {
    type: ActionTypes.NOTIFICATION_CROP,
    payload: add
  }
}
function errorMessage (obj) {
  return {
    type: ActionTypes.ERROR_MESSAGE,
    payload: obj
  }
}
function errorEmpty () {
  return {
    type: ActionTypes.ERROR_NULL
    // payload: obj
  }
}
export function getCropAddData (obj) {
  getToken = localStorage.getItem('token')
  // console.log(token,"Croppppppppppppppppppppppppppppppppppppppp")
  // console.log('Get Token farmer Crop', getToken)
  const objData = {
    farmerId: obj
  }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/farmer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(getCropData(getData.cropData))
  }
}
export function getProblemAddData (obj) {
  getToken = localStorage.getItem('token')
  // console.log('Get Token farmer Problem', getToken)

  const objData = {
    id: obj
  }
  // console.log("from farmer action 888888888888888888888888888888882222222: ", localStorage.getItem('token'));

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/farmer`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })

    const getData = await result.json()
    // console.log(getData.problems)

    dispatch(getProblemData(getData.problems))
  }
}

function getCropData (obj) {
  return {
    type: ActionTypes.GET_CROP_SPECIFIC,
    payload: obj
  }
}
function getProblemData (obj) {
  return {
    type: ActionTypes.GET_PROBLEM_SPECIFIC,
    payload: obj
  }
}
function addCropData (obj) {
  return {
    type: ActionTypes.ADD_CROP,
    payload: obj
  }
}
function addProblemData (obj) {
  return {
    type: ActionTypes.ADD_PROBLEM,
    payload: obj
  }
}
export function updateProblemAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')

  let data = new FormData()
  data.append('image_url', obj.image)
  data.append('audio_url', obj.audio)
  data.append('farmerId', obj.farmerID)
  data.append('description', obj.problemDescription)
  data.append('name', obj.problemName)
  data.append('problem_id', obj.selectId)
  for (var pair of data.entries()) {
    console.log(pair[0] + ',' + pair[1])
  }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/modify`, {
      method: 'PUT',
      headers: {
        authorization: getToken
      },
      body: data
    })
    const getData = await result.json()
    console.log(getData)
    dispatch(updateProblem(getData))
  }
}
export function updateCropAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')

  let data = new FormData()
  data.append('image_url', obj.image_url)
  data.append('name', obj.name)
  data.append('price', obj.price)
  data.append('transport', obj.transport)
  data.append('wieght', obj.wieght)
  data.append('date', obj.date)
  data.append('farmerId', obj.farmerId)
  data.append('crop_id', obj.selectId)
  console.log(data)
  for (var pair of data.entries()) {
    console.log(pair[0] + ',' + pair[1])
  }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken
      },
      body: data
    })
    const getData = await result.json()
    console.log(getData)
    dispatch(updateCrop(getData))
  }
}

function updateCrop (data) {
  return {
    type: ActionTypes.UPDATE_CROP,
    payload: data
  }
}
function updateProblem (data) {
  return {
    type: ActionTypes.UPDATE_PROBLEM,
    payload: data
  }
}
export function deleteCropAction (obj) {
  // console.log(obj)
  getToken = localStorage.getItem('token')

  let objData = {
    crop_id: obj
  }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(objData)
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(deleteCrop(getData))
  }
}

export function deleteProblemAction (obj) {
  // console.log(obj)
  getToken = localStorage.getItem('token')

  let objData = {
    problem_id: obj
  }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(objData)
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(deleteProblem(getData))
  }
}

function deleteProblem (obj) {
  return {
    type: ActionTypes.DELETE_PROBLEM,
    payload: obj
  }
}
function deleteCrop (obj) {
  return {
    type: ActionTypes.DELETE_CROP,
    payload: obj
  }
}

/* Crop Rates */

export function getAllCityList () {
  getToken = localStorage.getItem('token')
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/getAllCity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken,
        'if-none-match': 'no-match-for-this' //    // Here we change header
      }
    })

    const getData = await result.json()
    console.log(getData)
    dispatch(getCities(getData))
  }
}

export function getCropData (obj) {
  getToken = localStorage.getItem('token')
  const objData = {
    link: obj
  }
  console.log(obj, 'Crop list')
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/getCityData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken,
        'if-none-match': 'no-match-for-this' //    // Here we change header
      },
      body: JSON.stringify(objData)
    })

    const getData = await result.json()
    // console.log(getData)
    let arrFilter = []
    for (var i = 10; i < getData.length; i++) {
      arrFilter.push(getData[i])
    }
    // console.log(arrFilter)
    dispatch(getCityData(arrFilter))
  }
}

function getCities (obj) {
  return {
    type: ActionTypes.ALL_CITY_LIST,
    payload: obj
  }
}
function getCityData (obj) {
  return {
    type: ActionTypes.CITY_CROP_DATA,
    payload: obj
  }
}
