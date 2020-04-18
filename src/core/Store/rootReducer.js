import { combineReducers } from 'redux'

import { exampleReducer } from 'core/Example'

const rootReducer = combineReducers({
  example: exampleReducer
})

export default rootReducer
