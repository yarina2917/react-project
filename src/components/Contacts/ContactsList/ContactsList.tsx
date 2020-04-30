import React from 'react';

import { ContactsListProps as Props } from '../Contact.interface';
import Button from '@material-ui/core/Button';

const ContactsList: React.FC<Props> = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact._id}>
          <span>{contact.username}</span>
          <Button onClick={() => deleteContact(contact._id)} color="primary">Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList
