import React from 'react';
import { Route, Switch }  from 'react-router-dom'

import MainPage from './components/Main'
import RegistrationPage from './components/Registration'
import LoginPage from './components/Login'
import NotFoundPage from './components/NotFound'
import PrivateRoute from './components/Routes/PrivateRoute';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={MainPage}/>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
