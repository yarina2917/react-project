import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';

import { Props } from './Login.interface';

import '../Registration/style.scss';

const Login: React.FC<Props> = ({ errorMessage, loginUser, clearError }) => {

  useEffect(() => {
    if (errorMessage) {
      clearError()
    }
  },[]);

  const form = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup
        .string()
        .required('Username is required'),
      password: Yup
        .string()
        .required('Password is required'),
    }),
    onSubmit(values) {
      loginUser({username: values.username, password: values.password})
    }
  });
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={form.handleSubmit}>
        <TextField
          error={!!(form.touched.username && form.errors.username)}
          helperText={form.touched.username && form.errors.username}
          id="username"
          label="Username"
          type="text"
          {...form.getFieldProps('username')}
          // getFieldProps replace next:
          // onChange={form.handleChange}
          // onBlur={form.handleBlur}
          // value={form.values.username}
        />
        <TextField
          error={!!(form.touched.password && form.errors.password)}
          helperText={form.touched.password && form.errors.password}
          id="password"
          label="Password"
          type="password"
          {...form.getFieldProps('password')}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button className="submit-form" type="submit" variant="contained" color="primary" disabled={!form.dirty || !form.isValid}>Submit</Button>
      </form>
      <Button color="primary" variant="contained"><Link to="/registration">Go to registration</Link></Button>
    </div>
  )
};

export default Login
