import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import cookies from '../../services/cookies'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const logged = !!cookies.get('token');
  return (
    <Route
      {...rest}
      render={props => logged ? <Component {...props} /> : <Redirect to='/login' />}
    />
  )
};

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute
