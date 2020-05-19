export interface IContact {
   _id: string,
  username: string
}

export interface AddContactProps {
  addContact: (data: IContact) => void
}

export interface ContactsListProps {
  contacts: IContact[],
  deleteContact: (id: string) => void
}
