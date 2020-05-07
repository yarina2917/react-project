import { IChat } from '../ChatMain.interface';

export interface Props {
  activeChat: IChat,
  userId: string,
  isModalOpen: boolean,
  openModal: (data: {
    type: string,
    editChat: boolean,
    chatId: string,
    userId: string
  }) => void,
}
