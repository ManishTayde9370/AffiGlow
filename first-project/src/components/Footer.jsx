import React from 'react';

function Footer() {
  return (
    <footer className="text-muted text-center text-lg-start mt-auto py-3" style={{
      background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      boxShadow: '0 -2px 16px 0 rgba(60,60,120,0.07)',
      fontFamily: 'Montserrat, Inter, sans-serif',
      fontSize: 15
    }}>
      <div className="container text-center">
        <span>&copy; {new Date().getFullYear()} AffiGlow. All rights reserved. | Contact: support@affiglow.com</span>
      </div>
    </footer>
  );
}

export default Footer;