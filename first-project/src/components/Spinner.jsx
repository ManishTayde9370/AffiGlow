import React from 'react';
import './Spinner.css';
import logo from '../assets/react.svg';

function Spinner() {
  return (
    <div className="custom-spinner-container">
      <div className="custom-spinner-logo-wrapper">
        <img src={logo} alt="Logo" className="custom-spinner-logo" />
        <div className="custom-spinner"></div>
      </div>
      <div className="custom-spinner-text">Loading...</div>
    </div>
  );
}

export default Spinner;