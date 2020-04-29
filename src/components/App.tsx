import React from 'react';
import { Route, Switch, useLocation }  from 'react-router-dom'

import MainPage from './Main/MainPage'
import ContactsPage from './Contacts/ContactsPage'
import ProfilePage from './Profile/ProfilePage'
import RegistrationPage from './Registration/Registration'
import LoginPage from './Login/Login'
import NotFoundPage from './NotFound/NotFoundPage'
import PrivateRoute from './Routes/PrivateRoute'
import Header from "./Header/Header"

import './App.scss';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {!['/login', '/registration'].includes(pathname) && <Header/>}
      <Switch>
        <PrivateRoute exact path="/" component={MainPage}/>
        <PrivateRoute path="/contacts" component={ContactsPage}/>
        <PrivateRoute path="/profile" component={ProfilePage}/>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
