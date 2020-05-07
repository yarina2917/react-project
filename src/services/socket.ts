import openSocket from 'socket.io-client';
import config from '../constants/config';

let socket: any;

const setSocket = (userId: string) => {
  socket = openSocket(`${config.api}?userId=${userId}`);
};

const disconnectSocket = () => {
  socket.disconnect()
};

const clearSubscribe = (data: string[]) => {
  data.forEach((event) => socket.off(event))
};

const sendEvent = (event: string, data: any) => {
  socket.emit(event, data);
};

type Callback = (err: any, data: any) => void;

const getMessage = (cb: Callback) => {
  socket.on('notify-message', (data: any) => cb(null, data));
};

const deleteMessage = (cb: Callback) => {
   socket.on('notify-delete-message', (data: any) => cb(null, data));
};

const addChat = (cb: Callback) => {
  socket.on('notify-add-chat', (data: any) => cb(null, data));
};

const addMembers = (cb: Callback) => {
  socket.on('notify-add-members', (data: any) => cb(null, data));
};

const removeMembers = (cb: Callback) => {
  socket.on('notify-remove-members', (data: any) => cb(null, data));
};

const deleteChat = (cb: Callback) => {
  socket.on('notify-delete-chat', (data: any) => cb(null, data));
};

const typingMessage = (cb: Callback) => {
  socket.on('notify-typing', (data: any) => cb(null, data));
};

const stopTyping = (cb: Callback) => {
  socket.on('notify-stop-typing', (data: any) => cb(null, data));
};

export default {
  sendEvent,
  setSocket,
  disconnectSocket,
  clearSubscribe,
  getMessage,
  deleteMessage,
  addChat,
  addMembers,
  removeMembers,
  deleteChat,
  typingMessage,
  stopTyping
}
