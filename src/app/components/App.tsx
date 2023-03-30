import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ACCESS_TOKEN, PROTECTED_ROUTES, ROUTES, UNPROTECTED_ROUTES } from '@constants';
import { asyncGetCurrentUser, selectAuthorizationStatus } from '@modules';
import { ProtectedRoute } from '@routes';
import { useAppDispatch, useAppSelector } from '@hooks';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const isAuthorized = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(asyncGetCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuthorized} to={ROUTES.HOME} />}>
          {UNPROTECTED_ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route element={<ProtectedRoute isAuth={!isAuthorized} to={ROUTES.LOGIN} />}>
          {PROTECTED_ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
