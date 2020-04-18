import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// utils

// assets

// actions
import {
  exampleActions,
  exampleAsyncActions,
  exampleConstants,
  exampleSelectors
} from 'core/Example'

// components

// self-defined-components

const Example = ({
  exampleData,
  filter,
  fetchExampleAsync,
  setVisibilityFilter
}) => {
  useEffect(() => {
    fetchExampleAsync()
  }, [fetchExampleAsync])

  const {
    visibilityOptions: { SHOW_ALL, SHOW_HANDSOME, SHOW_BEAUTIFUL }
  } = exampleConstants

  return (
    <div>
      <label htmlFor="filter">
        Filter
        <select
          id="filter"
          value={filter}
          onChange={e => setVisibilityFilter({ option: e.target.value })}
          onBlur={e => setVisibilityFilter({ option: e.target.value })}
        >
          <option value={SHOW_ALL}>All</option>
          <option value={SHOW_HANDSOME}>Handsome</option>
          <option value={SHOW_BEAUTIFUL}>Beautiful</option>
        </select>
      </label>

      <ul>
        {exampleData && exampleData.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

Example.propTypes = {
  exampleData: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  fetchExampleAsync: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

const mapStateToProps = ({ example }) => ({
  exampleData: exampleSelectors.getVisibleData(example),
  filter: example.visibilityFilter
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchExampleAsync: exampleAsyncActions.fetchExampleAsync,
      setVisibilityFilter: exampleActions.setVisibilityFilter
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Example)
