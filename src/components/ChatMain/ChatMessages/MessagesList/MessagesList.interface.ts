import { Chat } from "../../ChatMain.interface";

export interface MessagesListInterface {
  activeChat: Chat,
  updateChatMessage: (data: any) => void
}
