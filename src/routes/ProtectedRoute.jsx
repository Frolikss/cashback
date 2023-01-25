import React from 'react';

import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router';

import { LOGIN_TOKEN_NAME } from '../constants';

export const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem(LOGIN_TOKEN_NAME)) {
    return <Navigate to={'/login'} replace />;
  }
  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element
};
