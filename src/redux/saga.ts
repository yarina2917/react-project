import { fork } from 'redux-saga/effects'

import { watchAuth } from './auth/watchers'

export default function * rootSaga () {
  yield fork(watchAuth)
}
