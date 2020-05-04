import React from 'react';
import { Route, Switch, useLocation }  from 'react-router-dom'

import ChatMain from './ChatMain/ChatMain'
import ContactsPage from './Contacts/ContactsPage'
import ProfilePage from './Profile/ProfileContainer'
import RegistrationPage from './Registration/RegistrationContainer'
import LoginPage from './Login/LoginContainer'
import NotFoundPage from './NotFound/NotFoundPage'
import PrivateRoute from './Routes/PrivateRoute'
import Header from './Header/Header'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {!['/login', '/registration'].includes(pathname) && <Header/>}
      <Switch>
        <PrivateRoute exact path="/" component={ChatMain}/>
        <PrivateRoute path="/contacts" component={ContactsPage}/>
        <PrivateRoute path="/profile" component={ProfilePage}/>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route component={NotFoundPage} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar/>
    </div>
  );
}

export default App;
