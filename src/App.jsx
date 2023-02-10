import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { ROUTES } from '@constants';
import { ListPage, LoginPage } from '@pages';
import { ProtectedRoute } from '@routes';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { asyncGetCurrentUser, selectUsersState } from './modules/users';

function App() {
  const { isAuthorized } = useSelector(selectUsersState);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(asyncGetCurrentUser());
    }
  }, []);

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

export default App;
