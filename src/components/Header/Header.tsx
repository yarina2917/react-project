import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";
import './style.scss'

import authActionsTypes from "../../redux/auth/constants";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <Button color="primary" variant="contained"><NavLink to="/">Chats</NavLink></Button>
      <Button color="primary" variant="contained"><NavLink to="/contacts">Contacts</NavLink></Button>
      <Button color="primary" variant="contained"><NavLink to="/profile">Profile</NavLink></Button>
      <Button color="primary" variant="contained" onClick={() => dispatch({type: authActionsTypes.LOGOUT_USER})}>Logout</Button>
    </nav>
  )
};

export default Header
