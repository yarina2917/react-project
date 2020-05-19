import React from 'react';

import { SelectContactsListProps as Props } from '../NewChat.interface';
import classNames from "classnames";

const SelectContactsList: React.FC<Props> = ({ contacts, selectContact, selectedContacts }) => {
  return (
    <div className="contacts-list-container">
      <h2>Choose contacts</h2>
      <ul className="contacts-list">
        {contacts.map(contact => (
          <li key={contact._id}
            onClick={() => selectContact(contact._id)}
            className={classNames({'selected': selectedContacts.includes(contact._id)})}>
            <span>{contact.username}</span>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default SelectContactsList
