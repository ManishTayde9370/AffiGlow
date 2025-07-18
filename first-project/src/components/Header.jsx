import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaHome, FaChartLine, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Header() {
  const userDetails = useSelector((state) => state.userDetails);
  const location = useLocation();
  
  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome size={18} />, show: true },
    { to: '/dashboard', label: 'Dashboard', icon: <FaChartLine size={18} />, show: !!userDetails },
    { to: '/account', label: 'Profile', icon: <FaUser size={18} />, show: !!userDetails },
    { to: '/login', label: 'Login', icon: <FaSignInAlt size={18} />, show: !userDetails },
    { to: '/register', label: 'Sign Up', icon: <FaUserPlus size={18} />, show: !userDetails },
    { to: '/logout', label: 'Logout', icon: <FaSignOutAlt size={18} />, show: !!userDetails },
  ];

  return (
    <nav className="navbar navbar-expand-lg" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: 500,
      padding: '1rem 0'
    }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{
          fontWeight: 700, 
          fontSize: '1.75rem', 
          color: '#1a202c',
          textDecoration: 'none',
          letterSpacing: '-0.025em'
        }}>
          <div className="me-3" style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{color: 'white', fontWeight: 700, fontSize: '1.2rem'}}>A</span>
          </div>
          AffiGlow
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{
            boxShadow: 'none',
            padding: '0.5rem'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center" style={{gap: '0.5rem'}}>
            {navLinks.filter(l => l.show).map(link => (
              <li className="nav-item" key={link.to}>
                <Link
                  className={`nav-link d-flex align-items-center px-3 py-2 rounded-3 ${
                    location.pathname === link.to 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-700'
                  }`}
                  to={link.to}
                  style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    margin: '0 0.25rem',
                    transition: 'all 0.2s ease-in-out',
                    textDecoration: 'none',
                    background: location.pathname === link.to 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : 'transparent',
                    border: location.pathname === link.to 
                      ? 'none' 
                      : '1px solid transparent',
                    minWidth: 'fit-content'
                  }}
                  onMouseEnter={e => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <span className="me-2" style={{
                    opacity: location.pathname === link.to ? 1 : 0.7
                  }}>
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;