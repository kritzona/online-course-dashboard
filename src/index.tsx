import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { Provider } from 'react-redux'
import store from './store/store'
import { ThemeProvider } from 'styled-components'
import LightTheme from './themes/LightTheme/LightTheme'
import GlobalStyle from './themes/GlobalStyle/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={LightTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.unregister()
