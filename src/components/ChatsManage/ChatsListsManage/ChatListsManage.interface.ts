import { IChat } from '../../ChatMain/ChatMain.interface';

export interface ChatListsManageProps {
  chatLists: IChat[],
  userId: string,
  getChats: () => void
}
