import React from 'react';
import { Navigate } from 'react-router-dom';

// Component to protect private routes
const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem('userId');

    return isAuthenticated ? children : <Navigate to="/redirect" />;
};

export default PrivateRoute;
