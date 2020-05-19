import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Props } from './Registration.interface';

import { Button, TextField } from '@material-ui/core';
import './style.scss';

const Registration: React.FC<Props> = ({ errorMessage, createUser, clearError }) => {

  useEffect(() => {
    if (errorMessage) {
      clearError()
    }
  },[]);

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
    onSubmit (values) {
      createUser({ username: values.username, password: values.password });
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
          {...form.getFieldProps('username')}
        />
        <TextField
          error={!!(form.touched.password && form.errors.password)}
          helperText={form.touched.password && form.errors.password}
          id="password"
          label="Password"
          type="password"
          {...form.getFieldProps('password')}
        />
        <TextField
          error={!!(form.touched.confirmPassword && form.errors.confirmPassword)}
          helperText={form.touched.confirmPassword && form.errors.confirmPassword}
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          {...form.getFieldProps('confirmPassword')}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button className="submit-form" type="submit" variant="contained" color="primary" disabled={!form.dirty || !form.isValid}>Submit</Button>
      </form>
      <Button color="primary" variant="contained"><Link to="/login">Go to login</Link></Button>
    </div>
  )
};

export default Registration
