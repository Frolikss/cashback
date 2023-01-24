import { LoginForm } from '@components/LoginForm';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/svg/logo.svg';

function App() {
  return (
    <div className="w-full flex md:items-center justify-end bg-login flex-col-reverse md:flex-row">
      <LoginForm />
      <div className="absolute md:static basis-1/3 md:basis-2/3 flex items-center justify-center text-center">
        <img src={logo} alt="logo" />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
