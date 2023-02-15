import { ROUTES, ACCESS_TOKEN } from '@constants';
import { ListPage, LoginPage } from '@pages';
import { ProtectedRoute } from '@routes';
import { asyncGetCurrentUser, selectAuthState } from '@users';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const isAuthorized = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(asyncGetCurrentUser());
    }
  }, [dispatch]);

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
