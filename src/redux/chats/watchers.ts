import { takeLatest, all } from 'redux-saga/effects'

import chatsSaga from './saga'

import authActions from './constants'

function * watchChats () {
  yield all([
    takeLatest(authActions.GET_CHATS, chatsSaga.getChats),
    takeLatest(authActions.DELETE_CHANNEL, chatsSaga.deleteChannel),
    takeLatest(authActions.GET_CHAT_INFORMATION, chatsSaga.getChat),
  ])
}

export {
  watchChats
}
