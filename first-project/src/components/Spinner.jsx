import React from 'react';
import './Spinner.css';

function Spinner() {
  return (
    <div className="custom-spinner-container">
      <img src={process.env.BASE_URL ? process.env.BASE_URL + 'logo.png' : '/logo.png'} alt="Logo" className="custom-spinner-main-logo" style={{background: 'none', border: 'none', padding: 0}} />
      <section className="loader">
        <div className="slider" style={{ '--i': 0 }}></div>
        <div className="slider" style={{ '--i': 1 }}></div>
        <div className="slider" style={{ '--i': 2 }}></div>
        <div className="slider" style={{ '--i': 3 }}></div>
        <div className="slider" style={{ '--i': 4 }}></div>
      </section>
      <div className="custom-spinner-text">Loading...</div>
    </div>
  );
}

export default Spinner;