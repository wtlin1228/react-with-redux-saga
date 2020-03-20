import { combineReducers } from 'redux'

import { exampleReducer } from 'Example'

const rootReducer = combineReducers({
  example: exampleReducer
})

export default rootReducer
