import React from 'react';
import './ExpenseDetails.css';

export const ExpenseDetails = () => {
  return (
    <div id="expense-details" className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Details</h4>
      </div>
      <div className="card-body p-0">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Category</h6>
              <small className="text-muted">Food</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Date</h6>
              <small className="text-muted">2017-07-10</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div>
              <h6 className="my-0">Amount</h6>
              <small>11.5 €</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Description</h6>
              <small>Lunch shopping</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Status</span>
            <span className="badge badge-pill badge-success">PAID</span>
          </li>
        </ul>
      </div>
    </div>
  );
};