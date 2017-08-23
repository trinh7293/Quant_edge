import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import switcher from './reducers'

let initialState = {
  lists: [
    {
      code: 'ahihi',
      company: 'DTT',
      price: '14141412'
    },
    {
      code: 'HUHU',
      company: 'Quant Edge',
      price: '124414'
    },
    {
      code: 'luloi',
      company: 'FRAMGIA',
      price: '124141241'
    }
  ],
  filter: 'none'
};

let store = createStore(switcher, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
