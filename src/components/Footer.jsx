import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';

export const Footer = () => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <div className="footer-logo-box mb-2">
          <img src={logo} alt="" />
        </div>
          <small className="d-block mb-3 text-muted">© 2017-2018</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="http://dayone.pl/">Cool stuff</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Random feature</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Team feature</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Stuff for developers</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Another one</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="http://dayone.pl/">Resource</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Resource name</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Another resource</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="http://dayone.pl/">Team</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Locations</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Privacy</a></li>
          <li><a className="text-muted" href="http://dayone.pl/">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
);
