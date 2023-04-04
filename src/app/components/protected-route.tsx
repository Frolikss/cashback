import { FC } from 'react';
import { Navigate } from 'react-router';
import { Outlet, To } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  to: To;
}

export const ProtectedRoute: FC<Props> = ({ isAuth, to }) => {
  return isAuth ? <Navigate to={to} /> : <Outlet />;
};
