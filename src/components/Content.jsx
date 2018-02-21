import React from 'react';
import './Content.css';

export const Content = (props) => (
  <div id="page-content" className="container">
    <div className="content">
      {props.children}
    </div>
  </div>
);