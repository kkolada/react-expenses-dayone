import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';

export const Header = () => (
  <div id="app-header" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h4 className="my-0 mr-md-auto font-weight-light">
      <img src={logo} className="header-logo"/>
      React Expenses
    </h4>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2" href="http://dayone.pl/" target="_blank" rel="noopener noreferrer">DayOne</a>
    </nav>
    <a className="btn btn-outline-primary" href="#"><i className="fa fa-eur mr-2"></i>Add expense</a>
  </div>
);
