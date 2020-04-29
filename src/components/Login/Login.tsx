import React from 'react';
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from "@material-ui/core";

import '../Registration/style.scss'
import actionsTypes from "../../redux/auth/constants";

interface Props {
  errorMessage: string
}

const Login: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
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
      dispatch({type: actionsTypes.LOGIN_USER, payload: {username: values.username, password: values.password}})
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
        {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
        <Button className="submit-form" type="submit" variant="contained" color="primary" disabled={!form.dirty || !form.isValid}>Submit</Button>
      </form>
      <Button color="primary" variant="contained"><Link to="/registration">Go to registration</Link></Button>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps)(Login)
