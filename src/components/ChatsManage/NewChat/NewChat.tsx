import React, {useEffect, useState} from 'react';

import { FormControl, Select, InputLabel } from '@material-ui/core';
import { toast } from 'react-toastify';

import services from '../../../services';

import SelectContactsList from './SelectContactsList/SelectContactsList';
import NewChatForm from './NewChatForm/NewChatForm';

import { IContact } from '../Contacts/Contact.interface';
import { GROUP, CHANNEL } from '../../../constants/chatTypes';

import './style.scss';

const NewChat = () => {
  const [chatType, setChatType] = useState<typeof GROUP | typeof CHANNEL>(GROUP);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  useEffect(() => {
    services.contacts.getContacts()
      .then(res => setContacts(res.data))
      .catch(err => toast.error(err.response.data.message))
  }, []);

  const handleSelectContact = (id: string) => {
    const index = selectedContacts.indexOf(id);
    if (index === -1) {
      setSelectedContacts(prevState => ([...prevState, id]))
    } else {
      setSelectedContacts(prevState => prevState.filter(el => el !== id))
    }
  };

  const handleCreateChat = (values: any, resetForm: any) => {
    services.chats.createChat({
      chatType,
      chatName: values.name,
      description: values.description,
      users: selectedContacts
    })
      .then(() => {
        resetForm();
        setSelectedContacts([]);
        toast.success('Chat was created');
      })
      .catch(err => toast.error(err.response.data.message))
  };

  return (
    <div className="new-chat-container">
      <div>
        <h2>Create {chatType === GROUP ? 'chat' : 'channel'}</h2>
        <FormControl>
          <InputLabel htmlFor="chat-type">Chat type</InputLabel>
          <Select native value={chatType}
            onChange={(event: any) => setChatType(event.target.value)}
            inputProps={{id: 'chat-type'}}
          >
            <option value={GROUP}>Chat</option>
            <option value={CHANNEL}>Channel</option>
          </Select>
        </FormControl>
        <NewChatForm createChat={handleCreateChat} chatType={chatType}/>
      </div>
      <SelectContactsList
        contacts={contacts}
        selectedContacts={selectedContacts}
        selectContact={handleSelectContact}
      />
    </div>
  )
};

export default NewChat
