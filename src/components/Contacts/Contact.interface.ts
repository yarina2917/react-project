export interface Contact {
   _id: string,
  username: string
}

export interface AddContactProps {
  addContact: (data: Contact) => void
}

export interface ContactsListProps {
  deleteContact: (id: string) => void,
  contacts: Contact[]
}
