import React from 'react';

import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { NewChatFormProps as Props } from '../NewChat.interface';
import { CHANNEL } from '../../../../constants/chatTypes';

const NewChatForm: React.FC<Props> = ({ createChat, chatType }) => {

  const form = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup
        .string()
        .required('Name is required'),
      description: Yup
        .string()
    }),
    onSubmit(values, { resetForm }) {
      createChat(values, resetForm)
    }
  });

  return (
    <div>
      <form onSubmit={form.handleSubmit} className="create-chat-from">
        <TextField
          error={!!(form.touched.name && form.errors.name)}
          helperText={form.touched.name && form.errors.name}
          id="name"
          label="Name"
          type="text"
          {...form.getFieldProps('name')}
        />
        {chatType === CHANNEL && (
          <TextField
            id="description"
            label="Description"
            type="text"
            {...form.getFieldProps('description')}
          />)
        }
        <Button className="submit-form" type="submit" variant="contained" color="primary" disabled={!form.dirty || !form.isValid}>
          Submit
        </Button>
      </form>
    </div>
  )
};

export default NewChatForm
