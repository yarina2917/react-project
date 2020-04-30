import actionsType from './constants'

const loginUser = (data: any) => ({ type: actionsType.LOGIN_USER, payload: data });
const createUser = (data: any) => ({ type: actionsType.CREATE_USER, payload: data });
const updateUser = (data: any) => ({ type: actionsType.UPDATE_USER, payload: data });
const clearUserError = () => ({ type: actionsType.CLEAR_USER_ERROR });

export default {
  loginUser,
  createUser,
  updateUser,
  clearUserError
}
