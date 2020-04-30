import { call, put } from 'redux-saga/effects'

import services from '../../services'
import history from '../../history/history'

import authActions from './constants'

function * login (action: any) {
  try {
    const response = yield call(services.auth.login, action.payload);
    services.cookies.set('token', response.data.apiKey);
    history.push('/');
    yield put({ type: authActions.LOGIN_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response.data.message });
  }
}

function * create (action: any) {
  try {
    const response = yield call(services.auth.createUser, action.payload);
    services.cookies.set('token', response.data.apiKey);
    history.push('/');
    yield put({ type: authActions.CREATE_USER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response.data.message });
  }
}

function * update (action: any) {
  try {
    const response = yield call(services.auth.updateUser, action.payload);
    yield put({ type: authActions.UPDATE_USER_SUCCESS, payload: response.data });
    action.payload.callback();
  } catch (error) {
    yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response.data.message })
  }
}

function * logout () {
  try {
    yield call(services.auth.logout);
    services.cookies.remove('token');
    history.push('/login');
    yield put({ type: authActions.LOGOUT_USER, payload: [] });
  } catch (error) {
    yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response.data.message });
  }
}

export default {
  login,
  create,
  update,
  logout
}
