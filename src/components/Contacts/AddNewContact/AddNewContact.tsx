import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AddContactProps as Props } from '../Contact.interface';
import services from '../../../services/contacts';

const AddNewContact: React.FC<Props> = ({ addContact }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddContact = (event: React.MouseEvent) => {
    event.preventDefault();
    services.addContact(username)
      .then(res => {
        addContact(res.data);
        closeModal();
      })
      .catch(err => setErrorMessage(err.response.data.message))
  };

  const closeModal = () => {
    setOpen(false);
    setUsername('');
    setErrorMessage('');
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add new contact
      </Button>
      <Dialog open={isOpen} onClose={() => closeModal()} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={"xs"}>
        <DialogTitle id="form-dialog-title">Add new contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            fullWidth
          />
        </DialogContent>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <DialogActions>
          <Button onClick={(e) => handleAddContact(e)} color="primary">Add</Button>
          <Button onClick={() => closeModal()} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewContact
