import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user'); // Check if user data exists in localStorage

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
