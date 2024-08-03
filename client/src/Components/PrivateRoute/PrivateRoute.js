import React from 'react';
import { Navigate } from 'react-router-dom';

// Component to protect private routes
const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem('UserEmail');

    return isAuthenticated ? children : <Navigate to="/redirect" />;
};

export default PrivateRoute;
