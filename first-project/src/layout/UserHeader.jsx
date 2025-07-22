import React from 'react'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import Can from '../rbac/Can';

function UserHeader() {
    const userDetails = useSelector((state)=>state.userDetails);
  return (
    <nav className='navbar navbar-expand-lg bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
            <Link className='navbar-brand d-flex align-items-center' to="/">
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        marginRight: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        // background: 'white',
                        // border: '1px solid #e2e8f0',
                        // padding: '2px'
                    }}
                />
                Dashboard
            </Link>
            <button 
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
            <span className='navbar-toggler-icon'/>
            </button>
            <div className='collapse navbar-collapse' id="navbarSupportedContent">
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    {/* Add other nav links here if needed */}
                </ul>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li className='nav-item dropdown'>
                        <Link className='nav-link dropdown-toggle'
                            href="#"
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                        >
                        {userDetails?(userDetails.name):(<>Account</>)}
                        </Link>
                        <ul className='dropdown-menu dropdown-menu-end'>
                            <li>
                                <Link className='dropdown-item' to="/manage-payment">
                                    Payments
                                </Link>
                            </li>
                            <Can permission='canViewUser'>
                                <li>
                                    <Link className='dropdown-item' to='/users'>
                                        Manage Users
                                    </Link>
                                </li>
                            </Can>
                                <hr className='m-0'/>
                            <li>
                                <Link className='dropdown-item' to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default UserHeader