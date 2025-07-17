import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLink, FaChartLine, FaCreditCard, FaUsers, FaMagic } from 'react-icons/fa';

function About() {
  const userDetails = useSelector((state) => state.userDetails);
  return (
    <div className="container py-5" style={{fontFamily: 'Montserrat, Inter, sans-serif'}}>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold mb-3" style={{fontSize: 40, color: '#6366f1', letterSpacing: 1}}>What is <span style={{color: '#3b3b5c'}}>AffiGlow</span>?</h1>
          <p className="fs-5 mb-4" style={{color: '#444'}}>AffiGlow is a next-generation platform for affiliate marketers and businesses to manage links, track analytics, and handle payments with ease. Whether you’re a solo marketer or a team, AffiGlow gives you the power to grow and optimize your affiliate campaigns in style.</p>
          <div className="row g-3 mb-4">
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm p-3" style={{borderRadius: 16, background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)'}}>
                <FaLink size={32} className="mb-2 text-primary" />
                <h5 className="fw-bold mb-1">Centralized Links</h5>
                <p className="mb-0" style={{fontSize: 15}}>Organize, create, and edit all your affiliate links in one place.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm p-3" style={{borderRadius: 16, background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)'}}>
                <FaChartLine size={32} className="mb-2 text-success" />
                <h5 className="fw-bold mb-1">Real-Time Analytics</h5>
                <p className="mb-0" style={{fontSize: 15}}>See which links perform best and optimize your campaigns.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm p-3" style={{borderRadius: 16, background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)'}}>
                <FaCreditCard size={32} className="mb-2 text-warning" />
                <h5 className="fw-bold mb-1">Secure Payments</h5>
                <p className="mb-0" style={{fontSize: 15}}>Buy credits, manage subscriptions, and handle payments securely.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm p-3" style={{borderRadius: 16, background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)'}}>
                <FaUsers size={32} className="mb-2 text-info" />
                <h5 className="fw-bold mb-1">Team Collaboration</h5>
                <p className="mb-0" style={{fontSize: 15}}>Assign roles, collaborate, and control access for your team.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm p-3" style={{borderRadius: 16, background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)'}}>
                <FaMagic size={32} className="mb-2 text-secondary" />
                <h5 className="fw-bold mb-1">Modern & Responsive</h5>
                <p className="mb-0" style={{fontSize: 15}}>Enjoy a seamless, beautiful experience on any device.</p>
              </div>
            </div>
          </div>
          {userDetails && (
            <div className="mt-4">
              <Link to="/dashboard" className="btn btn-gradient btn-lg px-4 py-2" style={{background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)', color: '#fff', borderRadius: 24, fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(60,60,120,0.10)'}}>Explore Dashboard</Link>
            </div>
          )}
        </div>
        <div className="col-md-6 text-center">
          <img src="/vite.svg" alt="AffiGlow Illustration" className="img-fluid mb-3" style={{maxHeight: 320, borderRadius: 24, boxShadow: '0 4px 24px 0 rgba(99,102,241,0.10)'}} />
          <div className="mt-3">
            <span className="badge rounded-pill" style={{background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)', color: '#fff', fontSize: 16, padding: '10px 24px'}}>Grow your affiliate business with AffiGlow!</span>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="fw-semibold mb-3" style={{color: '#6366f1'}}>What our users say</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100 border-0" style={{borderRadius: 18}}>
                <div className="mb-2" style={{fontSize: 22}}>⭐⭐⭐⭐⭐</div>
                <div>"AffiGlow made it so easy to manage my affiliate links and track performance. Highly recommended!"</div>
                <div className="text-muted mt-2">- Priya, Affiliate Marketer</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100 border-0" style={{borderRadius: 18}}>
                <div className="mb-2" style={{fontSize: 22}}>⭐⭐⭐⭐⭐</div>
                <div>"Our team can now collaborate and manage campaigns securely. The analytics are a game changer!"</div>
                <div className="text-muted mt-2">- Rahul, Agency Owner</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100 border-0" style={{borderRadius: 18}}>
                <div className="mb-2" style={{fontSize: 22}}>⭐⭐⭐⭐⭐</div>
                <div>"The payment and credit system is seamless. I never worry about running out of credits!"</div>
                <div className="text-muted mt-2">- Anjali, Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 