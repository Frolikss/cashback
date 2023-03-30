import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  AUTH_PAGE_CONTENT,
  INVITE_FIELDS_DATA,
  INVITE_PAGE_BUTTONS,
  InviteFieldNames,
  ListVariants
} from '@constants';
import { FormButtons, FormFields } from '@shared/components';
import { FormButtonAction } from '@shared/types';
import { InviteResponse } from '@interfaces';
import { Loader, UnorderedList } from '@components';
import { asyncInviteNewUser, asyncRegister, selectAuth } from '@modules';
import { useAppDispatch, useAppSelector, useModal } from '@hooks';
import { history } from '@helpers';

export const InviteNewUserPage = () => {
  const dispatch = useAppDispatch();

  const { isLoading, registeredUser } = useAppSelector(selectAuth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>();

  const { modalOpened, closeModal, openModal } = useModal();

  const [inviteResponse, setInviteResponse] = useState<InviteResponse>();
  const [invitedList, setInvitedList] = useState<string[]>([]);

  const isAgreedToConditions: boolean = watch(InviteFieldNames.CONFIRM_INVITE_RULES);

  const isSuccessfulInvite =
    inviteResponse && inviteResponse?.statusCode >= 200 && inviteResponse?.statusCode <= 299;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(asyncInviteNewUser(data))
      .unwrap()
      .then((response) => {
        setInviteResponse(response);
        setInvitedList((prevList) => [...prevList, data.inviteEmail]);
      })
      .catch((error) => {
        setInviteResponse(error);
      });
    openModal();
  };

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
    <div className="parent w-full flex md:items-center justify-center bg-login flex-col-reverse md:flex-row">
      <div className="basis-3/4 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div className="text-center">
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">
            {AUTH_PAGE_CONTENT.INVITE.header}
          </h2>
          <p className="text-base-500 text-lg">{AUTH_PAGE_CONTENT.INVITE.subheader}</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormFields fields={INVITE_FIELDS_DATA} errors={errors} register={register} />
          <FormButtons pageButtons={INVITE_PAGE_BUTTONS} buttonsProperties={buttonsProperties} />
        </form>
        <UnorderedList listItems={invitedList} variant={ListVariants.PRIMARY} />
      </div>
      <Loader
        isSuccessView={isSuccessfulInvite}
        isShown={modalOpened}
        onClose={closeModal}
        isLoading={isLoading}
        message={inviteResponse?.message}
      />
    </div>
  );
};
