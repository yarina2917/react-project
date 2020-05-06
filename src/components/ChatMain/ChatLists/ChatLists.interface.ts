import { Chat } from '../ChatMain.interface';

export interface ChatListsProps {
  chatLists: Chat[],
  activeChatId: string,
  userId: string,
  getChats: () => void,
  selectChat: (chat: Chat | {}) => void,
  updateChats: (data: Chat[]) => void,
  closeModal: () => void
}

export interface ChatPreviewProps {
  chat: Chat,
  activeChatId: string,
  selectChat: (chat: Chat | {}) => void
}
