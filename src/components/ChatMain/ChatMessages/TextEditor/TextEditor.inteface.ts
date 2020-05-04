import { Chat } from '../../ChatMain.interface';

export interface TextEditorProps {
  activeChat: Chat
}

export interface IUsersTyping {
  username: string,
  chatId: string
}
