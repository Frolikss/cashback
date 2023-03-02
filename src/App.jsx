import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ACCESS_TOKEN, ROUTES } from '@constants';
import { asyncGetCurrentUser, selectAuthorizationStatus } from '@modules';
import { ListPage, LoginPage } from '@pages';
import { ProtectedRoute } from '@routes';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const isAuthorized = useSelector(selectAuthorizationStatus);
  const dispatch = useDispatch();
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
        </Route>
        <Route element={<ProtectedRoute isAuth={!isAuthorized} to={ROUTES.LOGIN} />}>
          <Route element={<ListPage />} path={ROUTES.HOME} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
