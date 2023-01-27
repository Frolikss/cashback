import 'react-toastify/dist/ReactToastify.css';
import { LoginPage, ListViewPage } from '@pages';
import { ProtectedRoute } from '@routes';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/list" element={<ListViewPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
