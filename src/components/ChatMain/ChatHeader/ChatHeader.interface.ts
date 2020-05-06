import { Chat } from '../ChatMain.interface';

export interface Props {
  activeChat: Chat,
  userId: string
  openModal: (data: any) => void,
}
