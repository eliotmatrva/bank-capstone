import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
// import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateAccount from './components/createaccount2'
import AllData from './components/alldata3'
import Home from './components/home'
import Login from './components/login'
import Withdraw from './components/withdraw'
import Deposit from './components/deposit'
//import Balance from './components/balance'
export const UserContext = React.createContext(null);
export const ActiveUserXContext = React.createContext(null);

function Spa() {
  const [value, setValue] = useState({users:[{name: 'Mateo Elliott', email:'bigtonkatruhk@aol.com',password:'lasecreta', balance:10000},
                                             {name: 'Baynk Cohstoomer', email:'genericdude@bing.com',password:'12345678', balance:50}
  ]});
  const [activeUserX, setActiveUserX] = useState(null);
  console.log(activeUserX);
  console.log(UserContext);

  
  return(
    <HashRouter>
        <NavBar/>
        <ActiveUserXContext.Provider
          value={{ activeUserX, setActiveUserX }}
        >
          <UserContext.Provider 
            value={{ value, setValue }}
          >
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </UserContext.Provider>
        </ActiveUserXContext.Provider>
      </HashRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
