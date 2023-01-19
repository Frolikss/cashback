import { useForm } from 'react-hook-form';
import { sendLoginInfo } from '@features';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { TOAST_ID } from '@constants';
import { fieldsData } from '@fields';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(sendLoginInfo({ email: data.email, password: data.password }));
      console.log(res);
      toast.success(`${res.payload.status}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const notify = () => {
    const error = errors.email?.message ?? errors.password?.message;
    toast.warning(error, { toastId: TOAST_ID.login });
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      {fieldsData.map(({ Component, ...field }) => (
        <Component key={field.name} field={field} register={register} />
      ))}
      <button
        type="submit"
        {...register('login', {
          value: 'Log In'
        })}
        onClick={notify}>
        {'Log In'}
      </button>
      <button
        type="submit"
        {...register('signup', {
          value: 'Sign Up'
        })}>
        {'Register'}
      </button>
    </form>
  );
};
