import { fork } from 'redux-saga/effects'

import { watchAuth } from './watchers'

export default function * rootSaga () {
  yield fork(watchAuth)
}
