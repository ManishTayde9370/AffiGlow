import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function UserAccount() {
  const userDetails = useSelector((state) => state.userDetails);
  return (
    <div className="container py-5" style={{fontFamily: 'Montserrat, Inter, sans-serif'}}>
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card p-5 shadow-lg border-0" style={{borderRadius: 28, background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)'}}>
            <div className="d-flex flex-column align-items-center mb-4">
              <FaUserCircle size={90} className="mb-3 text-primary" style={{filter: 'drop-shadow(0 2px 8px #6366f133)'}} />
              <h2 className="fw-bold mb-1" style={{color: '#3b3b5c'}}>{userDetails?.name || 'User'}</h2>
              <p className="text-muted mb-0" style={{fontSize: 18}}>{userDetails?.email}</p>
            </div>
            <div className="d-grid gap-3 mb-3">
              <Link to="/reset-password" className="btn btn-outline-primary btn-lg rounded-pill fw-semibold">Reset Password</Link>
              <Link to="/users" className="btn btn-outline-secondary btn-lg rounded-pill fw-semibold">Manage Users</Link>
              <Link to="/manage-payment" className="btn btn-outline-success btn-lg rounded-pill fw-semibold">Manage Payment</Link>
              <Link to="/logout" className="btn btn-danger btn-lg rounded-pill fw-semibold">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount; 