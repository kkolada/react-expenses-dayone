import React from 'react';
import './ExpenseDetails.css';

export const ExpenseDetails = ({item}) => {
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
              <small className="text-muted">{item.category}</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Date</h6>
              <small className="text-muted">{item.date}</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div>
              <h6 className="my-0">Amount</h6>
              <small>{item.amount.value} {item.amount.currency}</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Description</h6>
              <small>{item.description}</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Status</span>
            {item.pending ? <span className="badge badge-pill badge-info">IN PROGRESS</span> :
              <span className="badge badge-pill badge-success">PAID</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};