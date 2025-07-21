import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Error() {
  const location = useLocation();
  // Try to get error from location state or fallback
  const error = location.state?.error;
  let errorMessage = 'Something went wrong';
  if (error) {
    if (typeof error === 'string') errorMessage = error;
    else if (error.message) errorMessage = error.message;
    else if (Array.isArray(error)) errorMessage = error.join(', ');
    else errorMessage = JSON.stringify(error);
  }
  return (
    <div className='container text-center'>
        <h1>Error</h1>
        <p className='text-danger'>{errorMessage}</p>
        <button className='btn btn-secondary' onClick={() => window.history.back()}>Go Back</button>
        <Link to="/">Go Home</Link>
    </div>
  )
}

export default Error