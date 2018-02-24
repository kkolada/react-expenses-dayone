import React from 'react';

export const ExpenseTableRow = ({item}) => {
  return (
    <tr key={item.id}>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.amount.value} {item.amount.currency}</td>
      <td>{item.description}</td>
      <td>{item.pending ? <span className="badge badge-pill badge-info">IN PROGRESS</span> :
        <span className="badge badge-pill badge-success">PAID</span>}</td>
    </tr>
  );
};