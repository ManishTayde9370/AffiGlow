import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaShieldAlt, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-auto py-4" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderTop: '1px solid #e2e8f0',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      fontSize: '0.95rem',
      color: '#4a5568'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <FaShieldAlt className="me-2" style={{color: '#667eea'}} />
              <span>Enterprise-grade affiliate management platform</span>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <span>&copy; {new Date().getFullYear()} AffiGlow</span>
              <span className="d-none d-md-inline">•</span>
              <a href="mailto:support@affiglow.com" className="text-decoration-none d-flex align-items-center" style={{color: '#4a5568'}}>
                <FaEnvelope className="me-1" size={14} />
                Support
              </a>
              <span className="d-none d-md-inline">•</span>
              <a href="#" className="text-decoration-none d-flex align-items-center" style={{color: '#4a5568'}}>
                <FaGlobe className="me-1" size={14} />
                Privacy
              </a>
              <span className="d-none d-md-inline">•</span>
              <a href="#" className="text-decoration-none d-flex align-items-center" style={{color: '#4a5568'}}>
                <FaTwitter className="me-1" size={14} />
                Twitter
              </a>
              <span className="d-none d-md-inline">•</span>
              <a href="#" className="text-decoration-none d-flex align-items-center" style={{color: '#4a5568'}}>
                <FaLinkedin className="me-1" size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;