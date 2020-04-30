import update from 'immutability-helper'

import actionsType from './constants'

export const initialState = {
  user: {},
  errorMessage: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionsType.CREATE_USER_SUCCESS:
      return update(state, {
        user: { $set: action.payload },
        errorMessage: { $set: '' }
      });
    case actionsType.LOGIN_USER_SUCCESS:
      return update(state, {
        user: { $set: action.payload },
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
        errorMessage: { $set: action.payload }
      });
    case actionsType.CLEAR_USER_ERROR:
      return update(state, {
        errorMessage: { $set: '' }
      });
    default:
      return state
  }
}
