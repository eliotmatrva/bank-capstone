import React, { useContext } from 'react';
import { UserContext } from '../index.js';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

export default function AllData(){
    const { value, setValue } = useContext(UserContext);
    let users = [...value.users];

  return (
    <>
        <h1>All Accounts</h1>
        <Table bordered hover>
            <thead>
                <tr className="tableHeader bg-primary text-white">
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {users.map((element,i) => {
                    return(
                        <TableRow name={element.name} email={element.email} password={element.password} balance={element.balance} />
                    )}
                )}
            </tbody>
        </Table>
    </>
  )
}
