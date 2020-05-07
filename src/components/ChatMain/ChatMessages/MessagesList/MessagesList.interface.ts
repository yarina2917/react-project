import { IChat } from '../../ChatMain.interface';
import { IMessage } from '../ChatMessages.interface';

export interface MessagesListInterface {
  activeChat: IChat,
  updateChatMessage: (data: IMessage) => void
}
