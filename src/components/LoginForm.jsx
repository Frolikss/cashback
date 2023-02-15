import { asyncLogin } from '@auth';
import { BUTTON_VARIANTS, ROUTES } from '@constants';
import { LOGIN_FIELDS_DATA } from '@fields/loginFieldsData';
import { FillForm, Button } from '@form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <FillForm errors={errors} fields={LOGIN_FIELDS_DATA} register={register} />
      <div className="flex gap-4">
        <Button variant={BUTTON_VARIANTS.PRIMARY}>Log In</Button>
        <Button variant={BUTTON_VARIANTS.SECONDARY}>
          <>
            <Link to={ROUTES.HOME} />
            Sign Up
          </>
        </Button>
      </div>
    </form>
  );
};
