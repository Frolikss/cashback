import 'react-toastify/dist/ReactToastify.css';
import { ROUTES } from '@constants';
import { auth } from '@login';
import { ListPage, LoginPage } from '@pages';
import { ProtectedRoute } from '@routes';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  const { isAuthorized } = auth();

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
