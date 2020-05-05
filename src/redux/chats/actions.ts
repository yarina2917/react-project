import actionsType from './constants'

const getChats = () => ({ type: actionsType.GET_CHATS });
const selectChat = (chat: any) => ({ type: actionsType.SELECT_CHAT, payload: chat});
const setSelectedMessages = (data: string[]) => ({ type: actionsType.SET_SELECTED_MESSAGES, payload: data});

export default {
  getChats,
  selectChat,
  setSelectedMessages
}
