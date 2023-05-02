import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { AppRoutes, AuthTokenNames } from '@shared/constants';

import { useAppDispatch, useAppSelector } from '@shared/lib';
import { asyncGetCurrentUser, selectAuthorizationStatus } from '@shared/model/currentUser';

import { ProtectedRoute } from '@app';

import 'react-toastify/dist/ReactToastify.css';

import { PROTECTED_ROUTES, UNPROTECTED_ROUTES } from '../constants/page-routes';

export function App() {
  const isAuthorized = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(AuthTokenNames.ACCESS);

  useEffect(() => {
    if (token) {
      dispatch(asyncGetCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuthorized} to={AppRoutes.HOME} />}>
          {UNPROTECTED_ROUTES.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
        <Route element={<ProtectedRoute isAuth={!isAuthorized} to={AppRoutes.LOGIN} />}>
          {PROTECTED_ROUTES.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
