import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'

import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { Button, TextField } from '@material-ui/core';

import './style.scss'

import authActions from '../../constants/auth'

const Registration = (props) => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      username: Yup
        .string()
        .required('Username is required'),
      password: Yup
        .string()
        .min(8, 'Must be at least 8 symbols')
        .required('Password is required'),
      confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], 'Passwords are not equal')
        .required('Password confirmation is required')
    }),
    onSubmit: values => {
      dispatch({type: authActions.CREATE_USER, payload: {username: values.username, password: values.password}})
    }
  });
  return (
    <div className="auth-container">
      <h2>Registration</h2>
      <form onSubmit={form.handleSubmit}>
        <TextField
          error={!!(form.touched.username && form.errors.username)}
          helperText={form.touched.username && form.errors.username}
          id="username"
          label="Username"
          type="text"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.username}
        />
        <TextField
          error={!!(form.touched.password && form.errors.password)}
          helperText={form.touched.password && form.errors.password}
          id="password"
          label="Password"
          type="password"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.password}
        />
        <TextField
          error={!!(form.touched.confirmPassword && form.errors.confirmPassword)}
          helperText={form.touched.confirmPassword && form.errors.confirmPassword}
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.confirmPassword}
        />
        {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
        <Button className="submit-form" type="submit" variant="contained" color="primary" disabled={!form.dirty || !form.isValid}>Submit</Button>
      </form>
      <Button color="primary" variant="contained"><Link to="/login">Go to login</Link></Button>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

Registration.propTypes = {
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps)(Registration)
