import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ReactTooltip from 'react-tooltip';
import '../App.css'
export default function NavBar(){
  return(
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" data-tip data-for="homeTip">BadBank</a>
        <ReactTooltip id="homeTip" place="top" effect="solid">
          Return to the Home Page
        </ReactTooltip>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" data-tip>
              <a className="nav-link" href="#/CreateAccount/" data-tip data-for="newAccountTip">Create Account</a>
              <ReactTooltip id="newAccountTip" place="top" effect="solid">
                Register a new account
              </ReactTooltip>
            </li>
            <li className="nav-item" data-tip>
              <a className="nav-link" href="#/login/" data-tip data-for="loginTip">Login</a>
              <ReactTooltip id="loginTip" place="top" effect="solid">
                Log in to an account.
              </ReactTooltip>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/" data-tip data-for="depositFundsTip">Deposit</a>
              <ReactTooltip id="depositFundsTip" place="top" effect="solid">
                Deposit funds into your account
              </ReactTooltip>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/" data-tip data-for="withdrawFundsTip">Withdraw</a>
              <ReactTooltip id="withdrawFundsTip" place="top" effect="solid">
                Withdraw funds from your account
              </ReactTooltip>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/" data-tip data-for="allDataTip">AllData</a>
              <ReactTooltip id="allDataTip" place="top" effect="solid">
                View details from all accounts
              </ReactTooltip>
            </li>          
          </ul>
        </div>
      </Navbar>
    </>
  );
}