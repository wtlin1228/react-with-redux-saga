import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'

export { default as rootReducer } from './rootReducer'
export { default as rootSaga } from './rootSaga'

export const sagaMiddleware = createSagaMiddleware()

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState,
    enhancers: []
  })

  return store
}
