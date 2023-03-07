import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { BUTTON_STYLES, ButtonVariants, ROUTES } from '@constants';
import { Field } from '@interfaces';
import { Button, FillForm } from '@components';

interface Props {
  fields: Field[];
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

export const AuthForm: FC<Props> = ({ fields, errors, register }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTES.LOGIN;

  return (
    <>
      <FillForm errors={errors} fields={fields} register={register} />
      <div className="flex gap-4">
        <Button variant={ButtonVariants.PRIMARY}>{isLoginPage ? 'Log In' : 'Sign Up'}</Button>
        <Link
          to={ROUTES[isLoginPage ? 'REGISTER' : 'LOGIN']}
          className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
          {isLoginPage ? 'Sign Up' : 'Log In'}
        </Link>
      </div>
    </>
  );
};
