import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold text-primary mb-3">Welcome to AffiGlow</h1>
          <p className="lead text-secondary mb-4">
            AffiGlow is your all-in-one platform for managing affiliate links, tracking analytics, and handling payments and user management for your affiliate marketing campaigns.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg me-2">Get Started</Link>
          <Link to="/about" className="btn btn-outline-primary btn-lg">Learn More</Link>
        </div>
        <div className="col-md-6 text-center">
          <img src="/vite.svg" alt="AffiGlow" className="img-fluid" style={{maxHeight: 300}} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="fw-semibold mb-3">What is AffiGlow?</h2>
          <p className="fs-5 mb-4">
            AffiGlow is designed to simplify affiliate marketing for everyone. Whether you're a marketer, business owner, or influencer, AffiGlow helps you:
          </p>
          <ul className="list-unstyled fs-5 mb-4">
            <li>• Organize and manage all your affiliate links in one place</li>
            <li>• Track clicks and performance with real-time analytics</li>
            <li>• Handle payments and credits securely</li>
            <li>• Manage users, roles, and permissions for your team</li>
            <li>• Enjoy a modern, responsive, and easy-to-use interface</li>
          </ul>
          <p className="fs-5">
            Get started today and take your affiliate campaigns to the next level with AffiGlow!
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="fw-semibold mb-3">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4 className="fw-bold text-primary">1. Register & Login</h4>
                <p>Create your account and log in to access your dashboard.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4 className="fw-bold text-primary">2. Add & Manage Links</h4>
                <p>Easily add, edit, and organize your affiliate links in one place.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4 className="fw-bold text-primary">3. Track & Optimize</h4>
                <p>View real-time analytics, manage payments, and optimize your campaigns for better results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="fw-semibold mb-3">Why AffiGlow?</h2>
          <ul className="list-unstyled fs-5">
            <li>✅ Easy affiliate link management</li>
            <li>✅ Real-time analytics and reporting</li>
            <li>✅ Secure payment and credit system</li>
            <li>✅ User roles and permissions</li>
            <li>✅ Simple, modern, and responsive UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;