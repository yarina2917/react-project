import React from 'react';

import Button from '@material-ui/core/Button';

import services from "../../../services/contacts";

interface Contact {
  _id: string,
  username: string
}

interface Props {
  deleteContact: (id: string) => void,
  contacts: Contact[]
}

const ContactsList: React.FC<Props> = (props) => {
  const deleteContact = (id: string) => {
    services.deleteContact(id)
      .then(() => props.deleteContact(id))
      .catch((err) => console.log(err))
  };

  return (
    <ul>
      {props.contacts.map(contact => (
        <li key={contact._id}>
          <span>{contact.username}</span>
          <Button onClick={() => deleteContact(contact._id)} color="primary">Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList
