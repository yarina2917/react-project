import api from './api'

const getChats = () => {
  return api({
    method: 'GET',
    url: '/chats',
  });
};

export default {
  getChats
}
