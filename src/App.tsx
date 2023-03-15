import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ACCESS_TOKEN, ROUTES } from '@constants';
import { asyncGetCurrentUser, selectAuthorizationStatus } from '@modules';
import { InviteNewUserPage, LoginPage, RegisterPage, RolesPage, UsersPage } from '@pages';
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
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.ROLES} element={<RolesPage />} />
          <Route path={ROUTES.INVITE} element={<InviteNewUserPage />} />
        </Route>
        <Route element={<ProtectedRoute isAuth={!isAuthorized} to={ROUTES.LOGIN} />}>
          <Route element={<UsersPage />} path={ROUTES.HOME} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
