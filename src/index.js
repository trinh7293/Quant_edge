import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import AppLists from './reducers'

let initialState = {
  lists: [
    {
      id: 0,
      code: 'ahihi',
      company: 'DTT',
      price: 20.0
    },
    {
      id: 1,
      code: 'HUHU',
      company: 'Quant Edge',
      price: 30.0,
    },
    {
      id: 2,
      code: 'luloi',
      company: 'FRAMGIA',
      price: 40.0
    }
  ],
  filter: 'none'
};

let store = createStore(AppLists, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
