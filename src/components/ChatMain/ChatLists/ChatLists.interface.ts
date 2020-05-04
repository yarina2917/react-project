import { Chat } from '../ChatMain.interface';

export interface ChatListsProps {
  chatLists: Chat[],
  activeChatId: string,
  getChats: () => void,
  selectChat: (chat: Chat) => void
}

export interface ChatPreviewProps {
  chat: Chat,
  activeChatId: string,
  selectChat: (chat: Chat) => void
}
