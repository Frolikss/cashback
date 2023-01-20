import { TOAST_ID } from '@constants';
import { loginFieldsData } from '@fields/loginFieldsData';
import { sendLoginInfo } from '@modules/login';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { CreateFields } from './Form/CreateFields';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(sendLoginInfo(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const notify = () => {
    const { email, password } = errors;
    const error = email?.message ?? password?.message;
    toast.warning(error, { toastId: TOAST_ID.login });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CreateFields fields={loginFieldsData} register={register} />
      <button onClick={notify}>Log In</button>
      <button>Sign Up</button>
    </form>
  );
};
