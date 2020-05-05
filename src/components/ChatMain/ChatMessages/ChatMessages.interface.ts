import { Chat } from '../ChatMain.interface';

export interface ChatMessagesProps {
  activeChat: Chat,
  selectedMessages: string[],
  setSelectedMessage: (data: string[]) => void
}

export interface IMessage {
  _id: string;
  message: string;
  user: any;
  createdAt: string;
  selected: boolean;
  messageType: string;
  chatId: string;
}
