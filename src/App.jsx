import { LoginForm } from '@components/LoginForm';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/svg/logo.svg';

function App() {
  return (
    <div className="w-full flex items-center bg-login">
      <LoginForm />
      <div className="basis-2/3 flex items-center justify-center text-center">
        <img src={logo} alt="logo" />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
