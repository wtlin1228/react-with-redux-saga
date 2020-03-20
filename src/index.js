import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureAppStore, { sagaMiddleware, rootSaga } from 'Store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'
import { App } from 'pages'

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
