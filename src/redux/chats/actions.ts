import actionsType from './constants';

const getChats = () => ({ type: actionsType.GET_CHATS });
const updateChats = (data: any) => ({ type: actionsType.UPDATE_CHATS, payload: data });
const getChatInformation = (data: any) => ({ type: actionsType.GET_CHAT_INFORMATION, payload: data });
const updateChatInformation = (data: any) => ({ type: actionsType.UPDATE_CHAT_INFORMATION, payload: data });

const selectChat = (chat: any) => ({ type: actionsType.SELECT_CHAT, payload: chat});
const setSelectedMessages = (data: string[]) => ({ type: actionsType.SET_SELECTED_MESSAGES, payload: data});
const updateChatMessage = (message: any) => ({ type: actionsType.UPDATE_CHAT_MESSAGE, payload: message});

const deleteChannel = () => ({ type: actionsType.DELETE_CHANNEL });
const deleteContact = (contactId: string) => ({ type: actionsType.DELETE_CONTACT, payload: contactId });

export default {
  getChats,
  updateChats,
  getChatInformation,
  updateChatInformation,
  selectChat,
  setSelectedMessages,
  updateChatMessage,
  deleteChannel,
  deleteContact
}
