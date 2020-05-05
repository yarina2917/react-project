import api from './api'

const login = (data: any) => {
  return api({
    method: 'POST',
    url: '/users/login',
    data: {
      username: data.username,
      password: data.password
    }
  });
};

const getUser = () => {
  return api({
    method: 'GET',
    url: '/users/get-one',
  });
};

const createUser = (data: any) => {
  return api({
    method: 'POST',
    url: '/users/create',
    data: {
      username: data.username,
      password: data.password
    }
  });
};

const updateUser = (data: any) => {
  return api({
    method: 'PUT',
    url: `/users/${data.userId}`,
    data: data.data
  });
};

const logout = () => {
  return api({
    method: 'GET',
    url: '/users/logout',
  });
};

export default {
  login,
  logout,
  getUser,
  createUser,
  updateUser
}
