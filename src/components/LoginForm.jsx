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
    <div className="basis-1/3 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
      <div>
        <h2 className="text-base-1000 text-32 font-eUkraine font-bold">Login</h2>
        <p className="text-base-500 text-lg">Login to your account</p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <CreateFields fields={loginFieldsData} register={register} />
        <div className="flex gap-4">
          <button
            className="flex-1 text-base-100 rounded-lg bg-accent-primary font-eUkraine font-medium text-lg p-3 leading-5 hover:bg-accent-dark"
            onClick={notify}>
            Log In
          </button>
          <button className="flex-1 text-accent-primary rounded-lg border-3 border-accent-primary hover:border-accent-dark">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
