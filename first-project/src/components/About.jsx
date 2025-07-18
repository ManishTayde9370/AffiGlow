import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLink, FaChartLine, FaCreditCard, FaUsers, FaMagic, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';

function About() {
  const userDetails = useSelector((state) => state.userDetails);
  
  return (
    <div className="container py-5" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'}}>
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="mb-4">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3" style={{fontSize: '0.9rem'}}>
              <FaStar className="me-2" />
              About Our Platform
            </span>
          </div>
          <h1 className="display-5 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}>
            We're here to make your <br />
            <span style={{color: '#667eea'}}>affiliate dreams</span> come true
          </h1>
          <p className="lead text-muted mb-4" style={{fontSize: '1.25rem', lineHeight: 1.6}}>
            AffiGlow is more than just a platform – it's your partner in affiliate marketing success. 
            We've built the tools you need to grow, track, and optimize your campaigns with confidence.
          </p>
          {userDetails && (
            <Link to="/dashboard" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              <FaRocket className="me-2" />
              Explore Dashboard
            </Link>
          )}
        </div>
        <div className="col-lg-6 text-center">
          <div className="position-relative">
            <div className="bg-gradient-primary rounded-4 p-5 d-inline-block shadow-lg" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: '100%',
              maxWidth: '400px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FaRocket className="text-white" style={{fontSize: '5rem'}} />
            </div>
            <div className="position-absolute top-0 start-100 translate-middle">
              <div className="bg-success rounded-circle p-3 shadow">
                <FaStar className="text-white" style={{fontSize: '1.5rem'}} />
              </div>
            </div>
            <div className="position-absolute bottom-0 end-0">
              <div className="bg-warning rounded-circle p-3 shadow">
                <FaShieldAlt className="text-white" style={{fontSize: '1.5rem'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="fw-bold mb-5 text-center" style={{color: '#2d3748'}}>
            Everything you need to succeed
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaLink className="text-primary" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Centralized Links</h5>
                  <p className="text-muted">Organize, create, and edit all your affiliate links in one beautiful, intuitive place</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaChartLine className="text-success" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Real-Time Analytics</h5>
                  <p className="text-muted">See which links perform best and optimize your campaigns with detailed insights</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaCreditCard className="text-warning" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Secure Payments</h5>
                  <p className="text-muted">Buy credits, manage subscriptions, and handle all payments securely</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaUsers className="text-info" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Team Collaboration</h5>
                  <p className="text-muted">Assign roles, collaborate, and control access for your growing team</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-secondary bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaMagic className="text-secondary" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Modern & Responsive</h5>
                  <p className="text-muted">Enjoy a seamless, beautiful experience on any device, anywhere</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}>
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                    <FaShieldAlt className="text-danger" style={{fontSize: '2.5rem'}} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Enterprise Security</h5>
                  <p className="text-muted">Bank-level security to keep your data and transactions safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="row">
        <div className="col-12">
          <h2 className="fw-bold mb-5 text-center" style={{color: '#2d3748'}}>
            What our amazing users say
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                border: '2px solid #e2e8f0'
              }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                  </div>
                  <p className="mb-3" style={{fontSize: '1.1rem', lineHeight: 1.6}}>
                    "AffiGlow made it so easy to manage my affiliate links and track performance. 
                    The analytics are incredible and the UI is just beautiful!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600
                    }}>
                      P
                    </div>
                    <div>
                      <div className="fw-bold" style={{color: '#2d3748'}}>Priya Sharma</div>
                      <div className="text-muted small">Affiliate Marketer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                border: '2px solid #e2e8f0'
              }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                  </div>
                  <p className="mb-3" style={{fontSize: '1.1rem', lineHeight: 1.6}}>
                    "Our team can now collaborate and manage campaigns securely. 
                    The role-based permissions are exactly what we needed!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle me-3" style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600
                    }}>
                      R
                    </div>
                    <div>
                      <div className="fw-bold" style={{color: '#2d3748'}}>Rahul Patel</div>
                      <div className="text-muted small">Agency Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100" style={{
                background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                border: '2px solid #e2e8f0'
              }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                    <FaStar className="text-warning me-1" />
                  </div>
                  <p className="mb-3" style={{fontSize: '1.1rem', lineHeight: 1.6}}>
                    "The payment and credit system is seamless. I never worry about running out of credits, 
                    and the dashboard is so intuitive!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-warning rounded-circle me-3" style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600
                    }}>
                      A
                    </div>
                    <div>
                      <div className="fw-bold" style={{color: '#2d3748'}}>Anjali Singh</div>
                      <div className="text-muted small">Business Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 