/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit'
import { visibilityOptions } from './constants'

const example = createSlice({
  name: 'example',
  initialState: {
    visibilityFilter: visibilityOptions.SHOW_ALL,
    data: []
  },
  // reducers support `immer` so you can mutate the state in slice.
  reducers: {
    update: (state, action) => ({
      ...state,
      ...action.payload
    }),
    setVisibilityFilter: (state, action) => ({
      ...state,
      visibilityFilter: action.payload.option
    })
  }
})

example.sagas = {
  fetchExampleAsync: createAction('example/fetchExampleAsync')
}

export default example
