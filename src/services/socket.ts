import openSocket from 'socket.io-client';
import config from '../constants/config';

let socket: any;

const getSocket = () => socket;

const setSocket = (userId: string) => {
  socket = openSocket(`${config.api}?userId=${userId}`);
};

type Callback = (err: any, data: any) => void;

const getMessage = (cb: Callback) => {
  socket.on('notify-message', (data: any) => cb(null, data));
};

const deleteMessage = (cb: Callback) => {
   socket.on('notify-delete-message', (data: any) => cb(null, data));
};

const clearSubscribe = (data: string[]) => {
  data.forEach((event) => socket.off(event))
};

// const addChat = (cb: Callback) => {
//   socket.on('notify-add-chat', (data: any) => cb(null, data));
// };
//
// const addMembers = (cb: Callback) => {
//   socket.on('notify-add-members', (data: any) => cb(null, data));
// };
//
// const removeMembers = (cb: Callback) => {
//   socket.on('notify-remove-members', (data: any) => cb(null, data));
// };

export default {
  getMessage,
  deleteMessage,
  getSocket,
  setSocket,
  clearSubscribe
}
