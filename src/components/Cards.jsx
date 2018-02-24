import React from 'react';
import { ExpenseDetails } from './ExpenseDetails';
import { ExpenseTable } from './ExpenseTable';

export const Cards = () => {
  return (
    <div className="row mb-3 text-center">
      <div className="col-9">
        <ExpenseTable/>
      </div>
      <div className="col-3">
        <ExpenseDetails/>
      </div>
    </div>
  );
};