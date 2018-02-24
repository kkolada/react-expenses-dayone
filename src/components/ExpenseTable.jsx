import React from 'react';
import './ExpenseTable.css';
import { ExpenseTableRow } from './ExpenseTableRow';
import { expenses } from '../data';
import { map } from 'lodash';

export const ExpenseTable = () => {
  const rows = map(expenses, (item) => {
    return <ExpenseTableRow item={item}/>;
  });
  return (
    <div id="expense-list" className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Expenses</h4>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped mb-0">
          <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
        {/*<button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>*/}
      </div>
    </div>
  );
};