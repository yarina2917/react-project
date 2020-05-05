import { IMessage } from '../../ChatMessages.interface';

export interface MessageProps {
  message: IMessage,
  selectedMessages: string[],
  setSelectedMessages: (data: string[]) => void
}
