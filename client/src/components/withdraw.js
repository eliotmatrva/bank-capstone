import React, { useContext } from 'react';
import Card from './card';
import { UserContext } from '../index.js'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import ErrorText from './ErrorText'
import * as Yup from 'yup';

export default function Withdraw(){
    //const [balance, setBalance] = React.useState('');
    const [withdraw, setWithdraw] = React.useState('');
    const [newBalance, setNewBalance] = React.useState(false);
    const { value, setValue } = useContext(UserContext);
    //const { activeUserX, setActiveUserX } = useContext(ActiveUserContextX);
    let users = [...value.users];
    let activeUser = users[0];
    //setBalance(activeUser.balance);

    function clearForm(){
      console.log("you cleared it");
    }
  
    function handleWithdraw(values){
      setWithdraw(values.withdraw);
      setNewBalance(activeUser.balance - values.withdraw);
      users[0].balance = activeUser.balance - values.withdraw;
      setValue({users:[...users]});
      alert(`💰💸🤑! You withdrew $${values.withdraw}`);
    }

    const validate = Yup.object({
      withdraw: Yup.number()
      .min(1, 'Must withdraw at least $1')
      .required('Withdraw amount is required')
      .max(activeUser.balance, 'You do not have enough money'),
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
                withdraw: withdraw
              }}
              validationSchema={validate}
              onSubmit={handleWithdraw}
          >
            {formik => (
                <div>
                    <p>Enter an amount greater than $1 then click "Withdraw Funds"</p>
                    <Form>
                        <Field
                            label="Withdraw"
                            name="withdraw"
                            type="number"
                            placeholder="Enter withdraw amount"
                            className="form-control"
                            id="withdraw"
                            autoComplete="off"
                        />
                        <ErrorMessage name="withdraw" component={ErrorText} />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-light"
                        >
                            Withdraw Funds
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