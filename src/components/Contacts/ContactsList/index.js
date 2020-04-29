import React from 'react';
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';

import services from "../../../services/contacts";

const ContactsList = (props) => {
  const deleteContact = (id) => {
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

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func
};

export default ContactsList
