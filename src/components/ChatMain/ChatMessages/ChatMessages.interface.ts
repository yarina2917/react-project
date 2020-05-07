import { IChat } from '../ChatMain.interface';

export interface ChatMessagesProps {
  activeChat: IChat,
  username: string,
  selectedMessages: string[],
  setSelectedMessage: (data: string[]) => void
}

export interface IMessage {
  _id: string;
  createdAt: string;
  chatId: string;
  message: string;
  messageType: string;
  selected: boolean;
  user: {
    _id: string,
    username: string,
    avatar: string,
    selected: boolean
  }
}
