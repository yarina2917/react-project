import { IChat } from '../ChatMain.interface';

export interface Props {
  activeChat: IChat,
  userId: string,
  openModal: (data: {
    type: string,
    editChat: boolean,
    chatId: string,
    userId: string
  }) => void,
}
