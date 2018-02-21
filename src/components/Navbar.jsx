import React from 'react';
import './Navbar.css';

export const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-normal"><i className="fa fa-eur mr-3"></i>React Expenses</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2 text-dark" href="http://dayone.pl/" target="_blank" rel="noopener noreferrer">DayOne</a>
    </nav>
    <a className="btn btn-outline-primary" href="#">Add expense</a>
  </div>
);
