export interface ChatInformationProps {
  data: any,
  isReady: boolean,
  isModalOpen: boolean,
  closeModal: () => void,
  getChatInformation: (data: {chatType: string, chatId: string}) => void
}

export interface ChatSettingsData {
  data: {
    type: string,
    editChat: boolean,
    chatId: string,
    chatName: string,
    channelDescription: string,
    chatUsers: any,
    chatImage: string,
    userId: string
  }
}
