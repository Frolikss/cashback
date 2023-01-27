import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = ({ children }) => {
  const { isAuthorized } = useSelector((state) => state.auth);
  if (isAuthorized) {
    return <Navigate to={'/login'} replace />;
  }
  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element
};
