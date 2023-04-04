import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormFields } from '@shared/components';
import { AppRoutes, ButtonVariants } from '@shared/constants';
import { history, useAppDispatch, useAppSelector } from '@shared/lib';
import { selectRegisteredUser, setRegisteredUserAction } from '@shared/model/auth';
import { RegisteredUser } from '@shared/types';
import { ROLES_FIELDS_DATA } from '../constants/field-content';

export const RolesForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectRegisteredUser);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(setRegisteredUserAction({ ...(data as RegisteredUser), ...user }));
    history.push(AppRoutes.INVITE);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormFields fields={ROLES_FIELDS_DATA} errors={errors} register={register} />
      <div className="flex self-end gap-4">
        <Button variant={ButtonVariants.SECONDARY} onClick={history.back}>
          Back
        </Button>
        <Button variant={ButtonVariants.PRIMARY}>Next</Button>
      </div>
    </form>
  );
};
