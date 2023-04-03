import React, { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { AUTH_PAGE_CONTENT } from '@constants';
import { Loader, UnorderedList } from '@shared/components';
import { ListVariants } from '@shared/constants';
import { useAppDispatch, useAppSelector, useModal } from '@shared/lib';
import { InviteForm } from '@features/invite-form/components/invite-form';
import { InviteResponse } from '@interfaces';
import { asyncInviteNewUser, selectAuthIsLoading } from '@modules';

export const InviteUser = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectAuthIsLoading);

  const { modalOpened, closeModal, openModal } = useModal();

  const [inviteResponse, setInviteResponse] = useState<InviteResponse>();
  const [invitedList, setInvitedList] = useState<string[]>([]);

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

  const isSuccessfulInvite =
    inviteResponse && inviteResponse?.statusCode >= 200 && inviteResponse?.statusCode <= 299;

  return (
    <div className="parent w-full flex md:items-center justify-center bg-login flex-col-reverse md:flex-row">
      <div className="basis-3/4 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div className="text-center">
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">
            {AUTH_PAGE_CONTENT.INVITE.header}
          </h2>
          <p className="text-base-500 text-lg">{AUTH_PAGE_CONTENT.INVITE.subheader}</p>
        </div>
        <InviteForm onSubmit={onSubmit} />
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
