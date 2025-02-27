import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './redirect.css';

const RedirectToLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="redirect-container">
            <h2>Your Session Expired Please Login </h2>
            <p>Redirecting to the login page...</p>
        </div>
    );
};

export default RedirectToLogin;
