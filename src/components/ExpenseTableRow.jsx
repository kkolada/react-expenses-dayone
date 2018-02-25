import React from 'react';

export const ExpenseTableRow = ({item, rowClicked}) => {
  return (
    <tr onClick={() => rowClicked(item)}>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.amount.value} {item.amount.currency}</td>
      <td>{item.description}</td>
      <td>{item.pending ? <span className="badge badge-pill badge-info">IN PROGRESS</span> :
        <span className="badge badge-pill badge-success">PAID</span>}</td>
    </tr>
  );
};