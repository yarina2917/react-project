import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import cookies from '../../services/cookies'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const logged = !!cookies.get('token');
  return (
    <Route
      {...rest}
      render={props => logged ? <Component {...props} /> : <Redirect to='/login' />}
    />
  )
};

export default PrivateRoute
