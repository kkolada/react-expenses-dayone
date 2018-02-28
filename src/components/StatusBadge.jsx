import React from 'react';

export const StatusBadge = ({status}) => {
  let badge = null;

  if (status) {
    badge = <span className="badge badge-pill badge-info">IN PROGRESS</span>;
  } else {
    badge = <span className="badge badge-pill badge-success">PAID</span>
  }

  return badge;
};