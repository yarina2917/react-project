import update from 'immutability-helper'

import actions from '../constants/auth'

export const initialState = {
  user: {},
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_USER_SUCCESS:
      return update(state, {
        user: { $set: action.payload },
        errorMessage: { $set: '' }
      });
    case actions.CREATE_USER_ERROR:
      return update(state, {
        errorMessage: { $set: action.payload }
      });
    case actions.LOGIN_USER_SUCCESS:
      return update(state, {
        user: { $set: action.payload },
        errorMessage: { $set: '' }
      });
    case actions.LOGIN_USER_ERROR:
      return update(state, {
        errorMessage: { $set: action.payload }
      });
    case actions.UPDATE_USER_SUCCESS:
      return update(state, {
        user: { $merge: action.payload },
        errorMessage: { $set: '' }
      });
    case actions.UPDATE_USER_ERROR:
      return update(state, {
        errorMessage: { $set: action.payload }
      });
    case actions.LOGOUT_USER_SUCCESS:
      return update(state, {
        user: { $set: {} },
        errorMessage: { $set: '' }
      });
    case actions.LOGOUT_USER_ERROR:
      return update(state, {
        errorMessage: { $set: action.payload }
      });
    case actions.CLEAR_USER_ERROR:
      return update(state, {
        errorMessage: { $set: '' }
      });
    default:
      return state
  }
}
