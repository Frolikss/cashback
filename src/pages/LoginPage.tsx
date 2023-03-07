import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, LOGIN_FIELDS_DATA } from '@constants';
import { AuthForm } from '@components';
import { asyncLogin } from '@modules';
import { useAppDispatch } from '@hooks';
import { AuthPageWrapper } from '../components/auth/AuthPageWrapper';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <AuthPageWrapper
      textContent={AUTH_PAGE_CONTENT.LOGIN}
      form={
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <AuthForm fields={LOGIN_FIELDS_DATA} register={register} errors={errors} />
        </form>
      }
    />
  );
};
