import api from './api'

const login = data => {
  return api({
    method: 'POST',
    url: '/users/login',
    data: {
      username: data.username,
      password: data.password
    }
  });
};

const create = data => {
  return api({
    method: 'POST',
    url: '/users/create',
    data: {
      username: data.username,
      password: data.password
    }
  });
};

const update = data => {
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
  create,
  update
}
