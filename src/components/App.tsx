import React, {useEffect} from 'react';
import { Route, Switch, useLocation }  from 'react-router-dom'

import ChatMain from './ChatMain/ChatMain'
import ChatsManagePage from './ChatsManage/ChatsManage'
import ProfilePage from './Profile/ProfileContainer'
import RegistrationPage from './Registration/RegistrationContainer'
import LoginPage from './Login/LoginContainer'
import NotFoundPage from './NotFound/NotFoundPage'
import PrivateRoute from './Routes/PrivateRoute'
import Header from './Header/Header'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import { Props } from './App.interface'

const App: React.FC<Props> = ({ getUser, isReady }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    getUser()
  }, []);
  return (
    <>
      {isReady && (
      <div className="App">
        {!['/login', '/registration'].includes(pathname) && <Header/>}
        <Switch>
          <PrivateRoute exact path="/" component={ChatMain}/>
          <PrivateRoute path="/chats-manage" component={ChatsManagePage}/>
          <PrivateRoute path="/profile" component={ProfilePage}/>
          <Route path="/registration" component={RegistrationPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route component={NotFoundPage} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar/>
      </div>
    )}
    </>
  )
};

export default App;
