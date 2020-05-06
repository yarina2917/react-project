import update from 'immutability-helper'

import actionTypes from './constants'
import chatActionTypes from '../chats/constants'

export const initialState = {
  isOpen: false,
  modalProps: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.OPEN_DIALOG:
      return update(state, {
        isOpen: {$set: true},
        modalProps: {$set: action.payload}
      });
    case chatActionTypes.GET_CHAT_INFORMATION_SUCCESS:
      const data = action.payload;
      return update(state, {
        modalProps: {$merge: {
          chatName: data.username || data.chatName,
          channelDescription: data.description || '',
          chatUsers: data.users || [],
          chatImage: (data.avatar && data.avatar.url) ? data.avatar.url : ''
        }}
      });
    case actionTypes.CLOSE_DIALOG:
      return update(state, {
        isOpen: {$set: false},
        modalProps: {$set: {}}
      });
    default:
      return state
  }
}
