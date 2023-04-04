import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthPageLayout, Button, FormFields } from '@shared/components';
import { AppRoutes, BUTTON_STYLES, ButtonVariants } from '@shared/constants';
import { history, useAppDispatch } from '@shared/lib';
import { setRegisteredUserAction } from '@shared/model/auth';
import { RegisteredUser } from '@shared/types';
import { REGISTER_FIELDS_DATA } from '../constants/field-content';
import { REGISTER_LAYOUT_CONTENT } from '../constants/layout-content';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    delete data.confirmPassword;
    dispatch(setRegisteredUserAction(data as RegisteredUser));
    history.push(AppRoutes.ROLES);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  return (
    <AuthPageLayout textContent={REGISTER_LAYOUT_CONTENT}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <FormFields fields={REGISTER_FIELDS_DATA} register={register} errors={errors} />
        <div className="flex gap-4">
          <Link to={AppRoutes.LOGIN} className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
            Log In
          </Link>
          <Button variant={ButtonVariants.PRIMARY}>Next</Button>
        </div>
      </form>
    </AuthPageLayout>
  );
};
