import React from 'react';
import Card from './card';
import bankLogo from '../assets/bank.png'

export default function Home(){

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Welcome to Banco Mal de Mateo"
      title="Banco Mal de Mateo"
      text="Welcome to Matt's Bad Bank where we siphon off small amounts of money from your account to make ourselves rich!"
      body={(
        <img
          src={bankLogo}
          className="img-fluid"
          alt="this is the bank's logo"
        />
      )}
    />
  );  
}
