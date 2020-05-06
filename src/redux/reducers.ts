import { combineReducers } from 'redux'

import auth from './auth/reducer'
import chats from './chats/reducer'
import modals from './modals/reducer'

export default combineReducers({
  auth,
  chats,
  modals
})
