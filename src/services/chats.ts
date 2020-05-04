import api from './api';

import store from '../redux/store';

const getChats = () => {
  return api({
    method: 'GET',
    url: '/chats',
  });
};

const getMessages = (lastMessageDate: string) => {
  const chatId = store.getState().chats.activeChat?._id;
  return api({
    method: 'GET',
    url: `/messages/${chatId}?lastMessageDate=${lastMessageDate}`,
  });
};

export default {
  getChats,
  getMessages
}
