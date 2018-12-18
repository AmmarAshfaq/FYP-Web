import ActionTypes from '../constant/farmerConstant'

const ROOT_URL = 'http://localhost:8080'
let getToken
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
  console.log(data)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/crop/add`, {
      method: 'POST',
      headers: {
        authorization: getToken,
        Accept: 'application/json'
      },
      body: data
    })
    const getData = await result.json()
    // console.log(getData)
    dispatch(addCropData(getData))
  }
}

export function addProblemAction (obj) {
  getToken = localStorage.getItem('token')

  console.log(getToken, 'asddddddddddsadss')

  let data = new FormData()
  data.append('image_url', obj.image)
  data.append('audio_url', obj.audio)
  data.append('farmerId', obj.farmerID)
  data.append('description', obj.problemDescription)
  data.append('name', obj.problemName)
  console.log(data)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/add`, {
      method: 'POST',
      headers: {
        authorization: getToken
      },
      body: data
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(addProblemData(getData))
  }
}

export function getCropAddData (obj) {
  getToken = localStorage.getItem('token')
  // console.log(token,"Croppppppppppppppppppppppppppppppppppppppp")
  console.log('Get Token farmer Crop', getToken)
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
    console.log(getData)
    dispatch(getCropData(getData.cropData))
  }
}
export function getProblemAddData (obj) {
  getToken = localStorage.getItem('token')
  console.log('Get Token farmer Problem', getToken)

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
    console.log(getData.problems)

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
  // for(var pair of data.entries()){
  //     console.log(pair[0]+','+pair[1]);
  // }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/problem/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken
        // 'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    })
    const getData = await result.json()
    console.log(getData)
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
     for(var pair of data.entries()){
        console.log(pair[0]+','+pair[1]);
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
