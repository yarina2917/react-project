import { IChat } from '../ChatMain.interface';
import { IChatModal } from '../ChatModal/ChatModal.interface';

export interface Props {
  activeChat: IChat,
  userId: string,
  openModal: (data: IChatModal) => void
}
