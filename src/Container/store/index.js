import rootReducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
// import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import Storage from './localStore'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { throttle } from 'lodash'
let presistState = Storage.loadState()

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// export default () => {
//   let store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger))
// //   let persistor = persistStore(store)
//   return { store}
// }
const store = createStore(
  rootReducer,
  presistState,
  // {},
  applyMiddleware(thunk, logger)
)
store.subscribe(
  throttle(() => {
    Storage.setState(store.getState())
  }, 1000)
)
export default store
// export const store = createStore(persistedReducer,{},applyMiddleware(thunk,logger));
// export const persistor = persistStore(store);
