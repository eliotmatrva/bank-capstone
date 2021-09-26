import React, { useContext } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import Card from './card';
import { UserContext } from '../index.js'
import * as Yup from 'yup';
//import TextField from './TextField';
import ErrorText from './ErrorText';
import '../App.css';

export default function CreateAccount(){
  const { value, setValue } = useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = [...value.users];
  console.log(`before adding user: ${JSON.stringify(ctx)}`);
  // console.log(JSON.stringify(ctx.users));

  const validate = Yup.object({
    name: Yup.string()
    //.max(15, 'Must be 15 characters or less')
    .required('Name is required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
  });
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function handleCreate(values){
    ctx.push({...values,balance:100});
    console.log(`After adding user: ${JSON.stringify(ctx)}`);
    setValue({users: [...ctx]})
    setShow(false);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
          <Formik
            initialValues = {{
              name: name,
              email: email,
              password: password
            }}
            validationSchema={validate}
            onSubmit={handleCreate}
          >
            {formik => (
                <div>
                    <Form>
                        <Field
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            className="form-control"
                            id="name"
                            autoComplete="off"
                        />
                        <ErrorMessage name="name" component={ErrorText} />
                        <Field
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            id="email"
                            autoComplete="off"
                        />
                        <ErrorMessage name="email" component={ErrorText} />
                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            className="form-control"
                            id="password"
                            autoComplete="off"
                        />
                        <ErrorMessage name="password" component={ErrorText} />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-light"
                        >
                            Create Account
                        </button>
                        <button
                          type="Reset"
                          className="btn btn-danger"
                          style={{marginLeft: 2 + 'px'}}
                          onClick={clearForm}
                        >
                          Reset
                        </button>
                    </Form>
                </div>
            )}
          </Formik>
        ) : (
          <>
          <h5>Success</h5>
          <button
              type="submit"
              className="btn btn-light"
              onClick={clearForm}
            >
              Add Another Account
          </button>
          </>
        )}
    />
  )
}