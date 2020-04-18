import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import configureAppStore, { sagaMiddleware, rootSaga } from 'core/Store'
import { GlobalStyle, theme } from 'view/styles'
import { App } from 'view/pages'

const store = configureAppStore()
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
