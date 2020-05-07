export interface IContact {
   _id: string,
  username: string
}

export interface AddContactProps {
  addContact: (data: IContact) => void
}

export interface ContactsListProps {
  deleteContact: (id: string) => void,
  contacts: IContact[]
}
