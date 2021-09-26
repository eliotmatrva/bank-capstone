import React, { useContext } from 'react';
import Card from './card';
import { UserContext } from '../index.js'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import ErrorText from './ErrorText'
import * as Yup from 'yup';

export default function Deposit(){
    //const [balance, setBalance] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [newBalance, setNewBalance] = React.useState(false);
    const { value, setValue } = useContext(UserContext);
    let users = [...value.users];
    let activeUser = users[0];
    //setBalance(activeUser.balance);

    function clearForm(){
      console.log("you cleared it");
    }
  
    function handleDeposit(values){
      setDeposit(values.deposit);
      setNewBalance(activeUser.balance + values.deposit);
      users[0].balance = activeUser.balance + values.deposit;
      setValue({users:[...users]});
      alert(`Congratulations! You deposited $${values.deposit}`);
    }

    const validate = Yup.object({
      deposit: Yup.number()
      .min(1, 'Must be at least $1 deposit')
      .required('Deposit amount is required'),
    });  

  return (
    <>
      <Card
          bgcolor="primary"
          txtcolor="white"
          header={`${activeUser.name}'s current balance:  $${activeUser.balance}`}
          title=""
          body={(
            <Formik
              initialValues = {{
                deposit: deposit
              }}
              validationSchema={validate}
              onSubmit={handleDeposit}
          >
            {formik => (
                <div>
                    <p>Enter an amount greater than $1 then click "Deposit Funds"</p>
                    <Form>
                        <Field
                            label="Deposit"
                            name="deposit"
                            type="number"
                            placeholder="Enter deposit amount"
                            className="form-control"
                            id="deposit"
                            autoComplete="off"
                        />
                        <ErrorMessage name="deposit" component={ErrorText} />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-light"
                        >
                            Deposit Funds
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
          )}
      />
           
    </>
  )
}