import React from 'react';
import { Route, Switch, useLocation }  from 'react-router-dom'

import MainPage from './components/Main'
import ContactsPage from './components/Contacts'
import ProfilePage from './components/Profile'
import RegistrationPage from './components/Registration'
import LoginPage from './components/Login'
import NotFoundPage from './components/NotFound'
import PrivateRoute from './components/Routes/PrivateRoute'
import Header from "./components/Header"

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
