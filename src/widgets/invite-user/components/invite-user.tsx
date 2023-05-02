import React, { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { InviteResponse } from '@shared/types';

import { Loader } from '@shared/components/loader';
import { ListVariants, UnorderedList } from '@shared/components/unordered-list';
import { useAppDispatch, useAppSelector, useModal } from '@shared/lib';
import { asyncInviteNewUser, selectAuthIsLoading } from '@shared/model/auth';

import { InviteForm } from '@features/invite-form';

import { INVITE_LAYOUT_CONTENT } from '../constants/layout-content';

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
            {INVITE_LAYOUT_CONTENT.header}
          </h2>
          <p className="text-base-500 text-lg">{INVITE_LAYOUT_CONTENT.subheader}</p>
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
