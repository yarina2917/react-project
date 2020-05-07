import { IChat } from '../ChatMain.interface';

export interface ChatListsProps {
  chatLists: IChat[],
  activeChatId: string,
  userId: string,
  getChats: () => void,
  selectChat: (chat: IChat | {}) => void,
  updateChats: (data: IChat[]) => void,
  closeModal: () => void
}

export interface ChatPreviewProps {
  chat: IChat,
  activeChatId: string,
  selectChat: (chat: IChat | {}) => void
}
