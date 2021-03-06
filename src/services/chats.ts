import api from './api';

import { PROFILE, DIALOG, CHANNEL, GROUP } from '../constants/chatTypes';

import store from '../redux/store';

const getChats = () => {
  return api({
    method: 'GET',
    url: '/chats',
  });
};

const getChat = (data: any) => {
  return api({
    method: 'GET',
    url: (data.chatType === PROFILE || data.chatType === DIALOG) ? `/users/${data.chatId}` : `/chats/${data.chatId}`
  });
};

interface ICreateChat {
  chatName: string,
  chatType: typeof CHANNEL | typeof GROUP,
  description: string,
  users: string[];
}

const createChat = ({chatName, chatType, description, users}: ICreateChat) => {
  return api({
    method: 'POST',
    url: '/chats',
    data: {
      chatName,
      chatType,
      description,
      users
    }
  });
};

const getMessages = (lastMessageDate: string) => {
  const chatId = store.getState().chats.activeChat._id;
  return api({
    method: 'GET',
    url: `/messages/${chatId}?lastMessageDate=${lastMessageDate}`,
  });
};

const deleteContact = (contactId: string) => {
  return api({
    method: 'DELETE',
    url: `/contacts/${contactId}`,
  });
};

const deleteChannel = () => {
  const chatId = store.getState().chats.activeChat._id;
  return api({
    method: 'DELETE',
    url: `/chats/${chatId}`,
  });
};

const updateLastMessage = (data: any, message: any): any => {
  const chatLists = [...data];
  const chatIndex = chatLists.findIndex((chat: any) => chat._id === message.chatId);
  const chat = chatLists.splice(chatIndex, 1)[0];
  chat.lastMessage = normalizeMessage(message);
  chatLists.unshift(chat);
  return chatLists
};

const normalizeMessage = (message: any) => {
  return  {
    _id: message._id,
    chatId: message.chatId,
    message: message.message,
    createdAt: message.createdAt,
    authorId: {
      _id: message.user._id,
      username: message.user.username
    }
  };
};

export default {
  getChats,
  getChat,
  createChat,
  getMessages,
  updateLastMessage,
  deleteContact,
  deleteChannel
}
