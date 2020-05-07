import React, {useEffect, useState} from 'react'

import { toast } from 'react-toastify';

import AddNewContact from './AddNewContact/AddNewContact'
import ContactsList from './ContactsList/ContactsList'

import { IContact } from './Contact.interface';
import services from '../../../services/contacts';

const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    services.getContacts()
      .then(res => setContacts(res.data))
      .catch(err => toast.error(err.response.data.message))
  }, []);

  const handleAddContact = (contactData: IContact) => {
    setContacts([...contacts, contactData])
  };

  const handleDeleteContact = (id: string) => {
    services.deleteContact(id)
      .then(() => {
        setContacts(contacts.filter(contact => contact._id !== id));
        toast.success('Contact was deleted');
      })
      .catch(err => toast.error(err.response.data.message))
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
