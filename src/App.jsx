import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
      <LoginPage />
      <ToastContainer />
    </>
  );
}

export default App;
