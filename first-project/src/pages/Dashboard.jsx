import React from 'react';
import LinkDashboard from '../components/links/LinkDashboard';

function Dashboard() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Links & Analytics</h2>
      <LinkDashboard />
    </div>
  );
}

export default Dashboard;