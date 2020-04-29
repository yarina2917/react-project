import React, {useEffect, useState} from 'react'

import AddNewContact from './AddNewContact'
import ContactsList from './ContactsList'

import services from '../../services/contacts'

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    services.getContacts()
      .then(res => setContacts(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleAddContact = (contactData) => {
    setContacts([...contacts, contactData])
  };

  const handleDeleteContact = (id) => {
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
