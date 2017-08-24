import { combineReducers } from 'redux'
import lists from './lists'
import filter from './filter'

const AppLists = combineReducers({
  lists,
  filter
})

export default AppLists
