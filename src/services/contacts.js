import api from './api'

const getContacts = () => {
  return api({
    method: 'GET',
    url: '/contacts',
  });
};

const addContact = username => {
  return api({
    method: 'POST',
    url: `/contacts/${username}`,
  });
};

const deleteContact = id => {
  return api({
    method: 'DELETE',
    url: `/contacts/${id}`,
  });
};

export default {
  getContacts,
  addContact,
  deleteContact
}
