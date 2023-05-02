import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@shared/constants';

import { AuthPageLayout } from '@shared/components/auth-page-layout';
import { BUTTON_STYLES, Button, ButtonVariants } from '@shared/components/button';
import { useAppDispatch } from '@shared/lib';
import { asyncLogin } from '@shared/model/auth';

import { FormFields } from '@entities/form-fields';

import { LOGIN_FIELDS_DATA } from '../constants/field-content';
import { LOGIN_LAYOUT_CONTENT } from '../constants/layout-content';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  return (
    <AuthPageLayout textContent={LOGIN_LAYOUT_CONTENT}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <FormFields fields={LOGIN_FIELDS_DATA} register={register} errors={errors} />
        <div className="flex gap-4 justify-between">
          <Button variant={ButtonVariants.PRIMARY}>Log In</Button>
          <Link className={BUTTON_STYLES[ButtonVariants.SECONDARY]} to={AppRoutes.REGISTER}>
            Sign Up
          </Link>
        </div>
      </form>
    </AuthPageLayout>
  );
};
