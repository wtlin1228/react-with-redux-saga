import slice from './slice'

export const exampleReducer = slice.reducer
export const exampleActions = slice.actions
export const exampleAsyncActions = slice.sagas
export { default as exampleSaga } from './sagas'
export { default as exampleSelectors } from './selectors'
export { default as exampleConstants } from './constants'
