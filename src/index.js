import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import AppLists from './reducers'
import { initialState } from './initialState'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(AppLists);
render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
