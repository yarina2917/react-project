import { takeLatest, all } from 'redux-saga/effects'

import authSaga from './saga'

import authActions from './constants'

function * watchAuth () {
  yield all([
    takeLatest(authActions.CREATE_USER, authSaga.create),
    takeLatest(authActions.UPDATE_USER, authSaga.update),
    takeLatest(authActions.GET_USER, authSaga.getUser),
    takeLatest(authActions.LOGIN_USER, authSaga.login),
    takeLatest(authActions.LOGOUT_USER, authSaga.logout),
  ])
}

export {
  watchAuth
}

