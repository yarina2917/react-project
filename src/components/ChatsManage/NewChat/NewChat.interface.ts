import { IContact } from '../Contacts/Contact.interface';

export interface SelectContactsListProps {
  contacts: IContact[],
  selectedContacts: string[],
  selectContact: (id: string) => void
}

export interface NewChatFormProps {
  chatType: string,
  createChat: (values: any, resetForm: () => any) => void
}
