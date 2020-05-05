import update from 'immutability-helper'

import actionsType from './constants'

import services from '../../services'

export const initialState = {
  chatLists: [],
  activeChat: {} as any,
  selectedMessages: [],
  errorMessage: ''
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionsType.GET_CHATS_SUCCESS:
      return update(state, {
        chatLists: {$set: action.payload},
      });
    case actionsType.CHATS_ERROR:
      return update(state, {
        errorMessage: {$set: action.payload},
      });
    case actionsType.SELECT_CHAT:
      return update(state, {
        activeChat: {$set: action.payload},
        selectedMessages: {$set: []}
      });
    case actionsType.UPDATE_CHAT_MESSAGE:
      const updatedData = services.chats.updateLastMessage(state.chatLists, action.payload);
      return update(state, {
        chatLists: {$set: updatedData}
      });
    case actionsType.SET_SELECTED_MESSAGES:
      return update(state, {
        selectedMessages: {$set: action.payload}
      });
    default:
      return state
  }
}
