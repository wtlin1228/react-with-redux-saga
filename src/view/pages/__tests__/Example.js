import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Example from '../Example'

import { exampleConstants, exampleAsyncActions } from 'core/Example'

const mockStore = configureStore([])
const { visibilityOptions } = exampleConstants

describe('Connected React-Redux Component Example', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      example: {
        visibilityFilter: visibilityOptions.SHOW_ALL,
        data: []
      }
    })

    store.dispatch = jest.fn()

    component = render(
      <Provider store={store}>
        <Example />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('should render with given state from Redux store', () => {
    expect(component).toMatchSnapshot()
  })
  it('should dispatch an async action on mounting', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(
      exampleAsyncActions.fetchExampleAsync()
    )
  })
})

describe('Connected React-Redux Component Example with mock data', () => {
  let store
  const mockData = [
    'Leo 1',
    'Leo 2',
    'Cat',
    'Leo 3',
    'Una 1',
    'Rabbit',
    'Una 2',
    'Una 3',
    'Dog'
  ]

  beforeEach(() => {
    store = mockStore({
      example: {
        visibilityFilter: visibilityOptions.SHOW_ALL,
        data: mockData
      }
    })
    store.dispatch = jest.fn()
  })

  afterEach(() => {
    cleanup()
  })

  it('should render with given state from Redux store', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Example />
      </Provider>
    )

    const listNode = getByTestId('example-list')
    expect(listNode.childNodes.length).toBe(mockData.length)
  })
})
