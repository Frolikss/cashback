import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { history, useAppDispatch, useAppSelector } from '@shared/lib';
import { asyncRegister, selectRegisteredUser } from '@shared/model/auth';

import { FormButtonAction, FormButtons } from '@entities/form-buttons';
import { FormFields } from '@entities/form-fields';

import { INVITE_FIELDS_DATA, INVITE_PAGE_BUTTONS, InviteFieldNames } from '../constants';

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
}

export const InviteForm: FC<Props> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();

  const registeredUser = useAppSelector(selectRegisteredUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>();

  const isAgreedToConditions: boolean = watch(InviteFieldNames.CONFIRM_INVITE_RULES);

  const buttonsProperties: FormButtonAction[] = [
    {
      id: 1,
      action: history.back
    },
    {
      id: 2,
      action: () => dispatch(asyncRegister(registeredUser))
    },
    {
      id: 3,
      props: {
        disabled: !isAgreedToConditions
      },
      customStyle: 'disabled:opacity-50 disabled:pointer-events-none'
    }
  ];
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormFields fields={INVITE_FIELDS_DATA} errors={errors} register={register} />
      <FormButtons pageButtons={INVITE_PAGE_BUTTONS} buttonsProperties={buttonsProperties} />
    </form>
  );
};
