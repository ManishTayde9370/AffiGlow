import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRocket, FaChartLine, FaCreditCard, FaUsers, FaHeart, FaStar, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

function Home() {
  const userDetails = useSelector((state) => state.userDetails);

  // If user is logged in, show personalized dashboard-style home
  if (userDetails) {
    return (
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3" style={{fontSize: '0.9rem'}}>
                <FaHeart className="me-2" />
                Welcome back!
              </span>
            </div>
            <h1 className="display-5 fw-bold mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2
            }}>
              Hey {userDetails.name || userDetails.email.split('@')[0]}! 👋
            </h1>
            <p className="lead text-muted mb-4" style={{fontSize: '1.25rem', lineHeight: 1.6}}>
              Ready to make your affiliate marketing dreams come true? Let's get you set up for success today.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/dashboard" className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-sm" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                <FaRocket className="me-2" />
                Launch Dashboard
              </Link>
              <Link to="/account" className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill" style={{
                borderColor: '#667eea',
                color: '#667eea',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                My Profile
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="position-relative">
              <div className="bg-gradient-primary rounded-circle p-5 d-inline-block shadow-lg" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaChartLine className="text-white" style={{fontSize: '4rem'}} />
              </div>
              <div className="position-absolute top-0 start-100 translate-middle">
                <div className="bg-success rounded-circle p-2 shadow">
                  <FaStar className="text-white" style={{fontSize: '1.2rem'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="fw-bold mb-4 text-center" style={{color: '#2d3748'}}>
              What would you like to do today?
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
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
                      <FaRocket className="text-primary" style={{fontSize: '2.5rem'}} />
                    </div>
                    <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Manage Your Links</h5>
                    <p className="text-muted mb-4">Create, edit, and organize all your affiliate links in one beautiful place</p>
                    <Link to="/dashboard" className="btn btn-primary rounded-pill px-4" style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      fontWeight: 600
                    }}>
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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
                    <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Track Performance</h5>
                    <p className="text-muted mb-4">See how your links are performing with real-time analytics and insights</p>
                    <Link to="/dashboard" className="btn btn-success rounded-pill px-4" style={{
                      background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                      border: 'none',
                      fontWeight: 600
                    }}>
                      View Analytics
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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
                    <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Handle Payments</h5>
                    <p className="text-muted mb-4">Manage your credits, payments, and financial settings securely</p>
                    <Link to="/manage-payment" className="btn btn-warning rounded-pill px-4 text-white" style={{
                      background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
                      border: 'none',
                      fontWeight: 600
                    }}>
                      Manage Payments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4" style={{
              background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
              border: '2px solid #e2e8f0'
            }}>
              <div className="card-body p-5 text-center">
                <FaLightbulb className="text-warning mb-3" style={{fontSize: '3rem'}} />
                <h3 className="fw-bold mb-3" style={{color: '#2d3748'}}>
                  Ready to grow your business?
                </h3>
                <p className="text-muted mb-4" style={{fontSize: '1.1rem'}}>
                  Every successful affiliate marketer started exactly where you are. 
                  Take the first step towards your goals today!
                </p>
                <Link to="/dashboard" className="btn btn-primary btn-lg rounded-pill px-5" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}>
                  Let's Get Started! 🚀
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If user is not logged in, show public landing page
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <div className="mb-4">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3" style={{fontSize: '0.9rem'}}>
              <FaStar className="me-2" />
              #1 Affiliate Management Platform
            </span>
          </div>
          <h1 className="display-4 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}>
            Turn Your Links Into <br />
            <span style={{color: '#667eea'}}>Success Stories</span>
          </h1>
          <p className="lead text-muted mb-4" style={{fontSize: '1.25rem', lineHeight: 1.6}}>
            Join thousands of marketers who've transformed their affiliate business with our powerful, 
            easy-to-use platform. Start your journey today!
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/register" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              <FaRocket className="me-2" />
              Start Free Trial
            </Link>
            <Link to="/about" className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill" style={{
              borderColor: '#667eea',
              color: '#667eea',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="position-relative">
            <div className="bg-gradient-primary rounded-circle p-5 d-inline-block shadow-lg" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FaChartLine className="text-white" style={{fontSize: '6rem'}} />
            </div>
            <div className="position-absolute top-0 start-100 translate-middle">
              <div className="bg-success rounded-circle p-3 shadow">
                <FaStar className="text-white" style={{fontSize: '1.5rem'}} />
              </div>
            </div>
            <div className="position-absolute bottom-0 end-0">
              <div className="bg-warning rounded-circle p-3 shadow">
                <FaHeart className="text-white" style={{fontSize: '1.5rem'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="fw-bold mb-5 text-center" style={{color: '#2d3748'}}>
            Everything you need to succeed
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                  <FaRocket className="text-primary" style={{fontSize: '2.5rem'}} />
                </div>
                <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Easy Management</h5>
                <p className="text-muted">Organize all your affiliate links in one beautiful, intuitive dashboard</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="bg-success bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                  <FaChartLine className="text-success" style={{fontSize: '2.5rem'}} />
                </div>
                <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Smart Analytics</h5>
                <p className="text-muted">Track performance with real-time insights and detailed reports</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                  <FaCreditCard className="text-warning" style={{fontSize: '2.5rem'}} />
                </div>
                <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Secure Payments</h5>
                <p className="text-muted">Handle all your financial transactions safely and efficiently</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="bg-info bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                  <FaShieldAlt className="text-info" style={{fontSize: '2.5rem'}} />
                </div>
                <h5 className="fw-bold mb-3" style={{color: '#2d3748'}}>Team Management</h5>
                <p className="text-muted">Manage users, roles, and permissions for your growing team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-4" style={{
            background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
            border: '2px solid #e2e8f0'
          }}>
            <div className="card-body p-5 text-center">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h3 className="fw-bold mb-2" style={{color: '#667eea'}}>10,000+</h3>
                  <p className="text-muted mb-0">Happy Marketers</p>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold mb-2" style={{color: '#667eea'}}>$2M+</h3>
                  <p className="text-muted mb-0">Revenue Generated</p>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold mb-2" style={{color: '#667eea'}}>99.9%</h3>
                  <p className="text-muted mb-0">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="row">
        <div className="col-12">
          <div className="text-center p-5 rounded-4" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}>
            <h2 className="fw-bold mb-3">Ready to transform your affiliate business?</h2>
            <p className="lead mb-4 opacity-90">Join thousands of successful marketers today</p>
            <Link to="/register" className="btn btn-light btn-lg rounded-pill px-5" style={{
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#667eea'
            }}>
              Get Started Now - It's Free! 🚀
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;