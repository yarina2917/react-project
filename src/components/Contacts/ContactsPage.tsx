import React, {useEffect, useState} from 'react'

import AddNewContact from './AddNewContact/AddNewContact'
import ContactsList from './ContactsList/ContactsList'

import services from '../../services/contacts'

interface Contact {
  _id: string,
  username: string
}

interface State {
  contacts: Contact[];
}

const Contacts: React.FC<State> = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    services.getContacts()
      .then(res => setContacts(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleAddContact = (contactData: Contact) => {
    setContacts([...contacts, contactData])
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact._id !== id))
  };

  return (
    <div>
      <h2>Contacts</h2>
      <AddNewContact addContact={handleAddContact}/>
      <ContactsList contacts={contacts} deleteContact={handleDeleteContact}/>
    </div>
  );
};

export default Contacts
