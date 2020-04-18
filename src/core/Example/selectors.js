import { createSelector } from '@reduxjs/toolkit'
import { visibilityOptions } from './constants'

const getVisibilityFilter = state => state.visibilityFilter
const getData = state => state.data

const getVisibleData = createSelector(
  [getVisibilityFilter, getData],
  (visibilityFilter, data) => {
    switch (visibilityFilter) {
      case visibilityOptions.SHOW_ALL:
        return data
      case visibilityOptions.SHOW_HANDSOME:
        return data.filter(name => name.toLowerCase().includes('leo'))
      case visibilityOptions.SHOW_BEAUTIFUL:
        return data.filter(name => name.toLowerCase().includes('una'))
      default:
        return []
    }
  }
)

const selectors = {
  getVisibleData
}

export default selectors
