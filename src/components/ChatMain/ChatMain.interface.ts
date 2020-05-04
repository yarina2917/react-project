export interface Chat {
  admins: any,
  author: string,
  avatar: any,
  chatName: string,
  chatType: string,
  createdAt: string,
  description: string,
  lastMessage: LastMessage,
  users: any,
  _id: string,
}

interface LastMessage {
  authorId: any,
  chatId: string,
  createdAt: string,
  message: string
  messageType: string,
  updatedAt: string,
  _id: string
}
