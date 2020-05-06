import { call, put } from 'redux-saga/effects'

import services from '../../services';

import chatsActions from './constants';

function * getChats () {
  try {
    const response = yield call(services.chats.getChats);
    yield put({ type: chatsActions.GET_CHATS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response.data.message });
  }
}

function * getChat (action: any) {
  try {
    const response = yield call(services.chats.getChat, action.payload);
    yield put({ type: chatsActions.GET_CHAT_INFORMATION_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response.data.message });
  }
}

function * deleteChannel () {
  try {
    const response = yield call(services.chats.deleteChannel);
    yield put({ type: chatsActions.DELETE_CHANNEL_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: chatsActions.CHATS_ERROR, payload: error.response.data.message });
  }
}

export default {
  getChats,
  getChat,
  deleteChannel
}
