import actionsType from './constants'

const getChats = () => ({ type: actionsType.GET_CHATS });
const selectChat = (chat: any) => ({ type: actionsType.SELECT_CHAT, payload: chat});

export default {
  getChats,
  selectChat
}
