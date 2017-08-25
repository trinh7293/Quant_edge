import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import AppLists from './reducers'
import { initialState, initialState2 } from './initialState'

let store = createStore(AppLists, initialState2);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
