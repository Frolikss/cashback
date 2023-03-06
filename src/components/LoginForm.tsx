import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ButtonVariants, LOGIN_FIELDS_DATA, ROUTES } from '@constants';
import { Button, FillForm } from '@components';
import { asyncLogin } from '@modules';
import { useAppDispatch } from '@hooks';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <FillForm errors={errors} fields={LOGIN_FIELDS_DATA} register={register} />
      <div className="flex gap-4">
        <Button variant={ButtonVariants.PRIMARY}>Log In</Button>
        <Button variant={ButtonVariants.SECONDARY}>
          <>
            <Link to={ROUTES.HOME} />
            Sign Up
          </>
        </Button>
      </div>
    </form>
  );
};
