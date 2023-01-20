import { LoginForm } from '@components/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <LoginForm />
      <ToastContainer />
    </>
  );
}

export default App;
