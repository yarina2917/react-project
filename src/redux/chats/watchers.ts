import { takeLatest, all } from 'redux-saga/effects'

import chatsSaga from './saga'

import authActions from './constants'

function * watchChats () {
  yield all([
    takeLatest(authActions.GET_CHATS, chatsSaga.getChats),
  ])
}

export {
  watchChats
}
