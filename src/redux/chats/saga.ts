import { call, put } from 'redux-saga/effects'

import services from '../../services';

import chatsActions from './constants';

function * getChats () {
  try {
    const response = yield call(services.chats.getChats);
    yield put({ type: chatsActions.GET_CHATS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response ? error.response.data.message : error });
  }
}

function * getChat (action: any) {
  try {
    const response = yield call(services.chats.getChat, action.payload);
    yield put({ type: chatsActions.GET_CHAT_INFORMATION_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response ? error.response.data.message : error });
  }
}

function * deleteContact (action: any) {
  try {
    yield call(services.chats.deleteContact, action.payload);
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response ? error.response.data.message : error });
  }
}

function * deleteChannel () {
  try {
    yield call(services.chats.deleteChannel);
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response ? error.response.data.message : error });
  }
}

export default {
  getChats,
  getChat,
  deleteContact,
  deleteChannel
}
