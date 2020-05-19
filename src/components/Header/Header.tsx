import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

import actions from '../../redux/auth/actions';

const Header = () => {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(actions.logoutUser());
  return (
    <nav>
      <Button color="primary" variant="contained"><NavLink to="/">Chats</NavLink></Button>
      <Button color="primary" variant="contained"><NavLink to="/chats-manage">Chats manage</NavLink></Button>
      <Button color="primary" variant="contained"><NavLink to="/profile">Profile</NavLink></Button>
      <Button color="primary" variant="contained" onClick={logoutUser}>Logout</Button>
    </nav>
  )
};

export default Header
