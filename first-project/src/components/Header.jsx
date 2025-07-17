import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  const userDetails = useSelector((state) => state.userDetails);
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home', show: true },
    { to: '/about', label: 'About', show: !!userDetails },
    { to: '/dashboard', label: 'Dashboard', show: !!userDetails },
    { to: '/account', label: <FaUserCircle size={22} />, show: !!userDetails },
    { to: '/login', label: 'Login', show: !userDetails },
    { to: '/register', label: 'Register', show: !userDetails },
    { to: '/logout', label: 'Logout', show: !!userDetails },
  ];
  return (
    <nav className="navbar navbar-expand-lg mb-4" style={{
      background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)',
      borderRadius: 18,
      boxShadow: '0 2px 16px 0 rgba(60,60,120,0.07)',
      fontFamily: 'Montserrat, Inter, sans-serif',
      fontWeight: 500,
      margin: '18px 0 0 0',
      padding: '0.5rem 0'
    }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{fontWeight: 800, fontSize: 26, color: '#3b3b5c', letterSpacing: 1}}>
          <img src="/vite.svg" alt="AffiGlow Logo" style={{height: 36, marginRight: 10}} />
          AffiGlow
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center" style={{gap: 12}}>
            {navLinks.filter(l => l.show).map(link => (
              <li className="nav-item" key={link.to}>
                <Link
                  className={`nav-link px-4 py-2 rounded-pill ${location.pathname === link.to ? 'bg-primary text-white shadow-sm' : 'text-dark'}`}
                  to={link.to}
                  style={{
                    fontWeight: 600,
                    fontSize: 17,
                    margin: '0 2px',
                    transition: 'background 0.2s, color 0.2s',
                    boxShadow: location.pathname === link.to ? '0 2px 8px 0 rgba(60,60,120,0.10)' : 'none',
                    background: location.pathname === link.to ? 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)' : 'none',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
                  onMouseOut={e => e.currentTarget.style.background = location.pathname === link.to ? 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)' : 'none'}
                >
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