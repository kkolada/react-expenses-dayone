import React from 'react';
import { StatusBadge } from './StatusBadge';

export const ExpenseTableRow = ({item, rowClicked, statusClicked}) => {
  const statusClickHandler = (e) => {
    e.stopPropagation();
    statusClicked(item);
  };

  return (
    <tr onClick={() => rowClicked(item)}>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.amount.value} {item.amount.currency}</td>
      <td>{item.description}</td>
      <td onClick={statusClickHandler}>
        <StatusBadge status={item.pending}/>
      </td>
    </tr>
  );
};