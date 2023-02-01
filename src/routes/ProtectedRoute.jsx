import React from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth, to }) => {
  return isAuth ? <Navigate to={to} /> : <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool,
  to: PropTypes.string
};
