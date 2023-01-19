import { useForm } from 'react-hook-form';
import { EMAIL_PATTERN } from '../constatns/email_pattern';
import { INVALID_EMAIL, MIN_PASS_LENGTH } from '../constatns/input_error_messages';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        type="email"
        {...register('email', {
          required: true,
          pattern: {
            value: EMAIL_PATTERN,
            message: INVALID_EMAIL
          }
        })}
      />
      <input
        type="password"
        {...register('password', {
          required: true,
          minLength: {
            value: 6,
            message: MIN_PASS_LENGTH
          }
        })}
      />
      <input type="submit" {...register('login')} />
      <input type="submit" {...register('register')} />
    </form>
  );
};
