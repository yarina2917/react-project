import { fork } from 'redux-saga/effects'

import { watchAuth } from './auth/watchers'
import { watchChats } from './chats/watchers'

export default function * rootSaga () {
  yield fork(watchAuth);
  yield fork(watchChats)
}
