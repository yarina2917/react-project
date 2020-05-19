import React from 'react';

import { Props } from './MessagesActions.inteface';

import { Button } from '@material-ui/core';

const MessagesActions: React.FC<Props> = ({ cancelSelect, deleteMessages }) => {
  return (
    <div className="message-select-container">
      <Button color="primary" variant="contained" onClick={deleteMessages}>Delete</Button>
      <Button color="primary" onClick={cancelSelect}>Cancel</Button>
    </div>
  )
};

export default MessagesActions
