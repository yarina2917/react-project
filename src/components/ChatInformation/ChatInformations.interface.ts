export interface ChatInformationProps {
  data: {
    type: string,
    editChat: boolean,
    chatId: string
  },
  modalOpen: boolean,
  closeModal: () => void,
  getChatInformation: (data: any) => void
}

export interface ChatSettingsData {
  data: {
    type: string,
    editChat: boolean,
    chatId: string,
    chatName?: string,
    channelDescription?: string,
    chatUsers?: any,
    chatImage?: string
  }
}
