import React, { useContext } from 'react';
import Card from './card';
import { UserContext, ActiveUserXContext } from '../index.js'
export default function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const { value, setValue } = useContext(UserContext);
    const { activeUserX, setActiveUserX } = useContext(ActiveUserXContext);
    
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
      }

      function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
      }

      function successfulLogin(){
          setStatus('You logged in! 🎉');
          setShow(false);
      }

      function updateActiveUser(userIndexPosition){
        let activeUser = value.users[userIndexPosition].email;
        setStatus('User not found.  Try again');
        setActiveUserX(activeUser);
        console.log(JSON.stringify(value));
        console.log("hello");
        console.log(`active user is ${activeUser}`);
      }
    
      function handleLogin(){
        console.log(`user submitted : ${email} & ${password}`);
        if (!validate(email,    'email'))     return;
        if (!validate(password, 'password'))  return;
        
        let userExistsAtIndex = value.users.findIndex((user) => {
          return user.email === email && user.password === password
        })
        if (userExistsAtIndex > -1) {
          console.log(`Submitted credentials match the user at index ${userExistsAtIndex}`);
        }
        else {
          console.log('No user with matching credentials was found');
        }
        
        /* check to see if submitted un+pw matches a user then console.log the result*/
        let userIndexPosition = value.users.findIndex((user) => {
            return user.email === email && user.password === password
        })
        
        if (userIndexPosition > -1) {
          updateActiveUser(userIndexPosition);
          successfulLogin();
        }
        
        
      }
    
      return (
        <Card
          bgcolor="primary"
          header="Log In"
          status={status}
          body={show ? (
              <>
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleLogin}
                >
                  Log in!
                </button>
                
              </>
            ) : (
              <>
              <h5>You are now logged in!</h5>
              <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Log in as another user
              </button>
              </>
            )}
        />
      )
  }