import update from 'immutability-helper'

import actionsType from './constants'

export const initialState = {
  user: {} as any,
  errorMessage: '',
  isReady: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionsType.LOGIN_USER_SUCCESS:
      return update(state, {
        user: { $set: action.payload },
        isReady: { $set: true },
        errorMessage: { $set: '' }
      });
    case actionsType.UPDATE_USER_SUCCESS:
      return update(state, {
        user: { $merge: action.payload },
        errorMessage: { $set: '' }
      });
    case actionsType.LOGOUT_USER_SUCCESS:
      return update(state, {
        user: { $set: {} },
        errorMessage: { $set: '' }
      });
    case actionsType.AUTH_USER_ERROR:
      return update(state, {
        errorMessage: { $set: action.payload },
        isReady: { $set: true }
      });
    case actionsType.CLEAR_USER_ERROR:
      return update(state, {
        errorMessage: { $set: '' }
      });
    default:
      return state
  }
}
