import cn from 'classnames';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  AUTH_PAGE_CONTENT,
  FieldNames,
  INVITE_FIELDS_DATA,
  INVITE_PAGE_BUTTONS,
  ListVariants
} from '@constants';
import { FormButtonAction, InviteResponse } from '@interfaces';
import { FillForm, FormButtons, Loader, UnorderedList } from '@components';
import { asyncInviteNewUser, asyncRegister, selectAuth } from '@modules';
import { useAppDispatch, useAppSelector } from '@hooks';
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

  const [inviteResponse, setInviteResponse] = useState<InviteResponse>();
  const [isModalShow, setIsModalShow] = useState(false);
  const [invitedList, setInvitedList] = useState<string[]>([]);

  const isAgreedToConditions: boolean = watch(FieldNames.CONFIRM_INVITE_RULES);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const inviteListNewItem = data.inviteEmail;

    dispatch(asyncInviteNewUser(data))
      .unwrap()
      .then((response) => {
        setInviteResponse(response);
        setInvitedList((prevList) => [...prevList, inviteListNewItem]);
      })
      .catch((error) => {
        setInviteResponse(error);
      });
    setIsModalShow(true);
  };

  const onCloseModal = () => setIsModalShow(false);

  const buttonActions: FormButtonAction[] = [
    {
      id: 1,
      action: () => history.back()
    },
    {
      id: 2,
      action: () => dispatch(asyncRegister(registeredUser))
    },
    {
      id: 3,
      customStyle: cn({ 'pointer-events-none opacity-50': !isAgreedToConditions })
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
          <FillForm fields={INVITE_FIELDS_DATA} errors={errors} register={register} />
          <FormButtons pageButtons={INVITE_PAGE_BUTTONS} buttonsProperties={buttonActions} />
        </form>
        <UnorderedList listItems={invitedList} variant={ListVariants.PRIMARY} />
      </div>
      <Loader
        isSuccessView={
          inviteResponse && inviteResponse.statusCode >= 200 && inviteResponse.statusCode <= 299
        }
        isShow={isModalShow}
        onClose={onCloseModal}
        isLoading={isLoading}
        message={inviteResponse && inviteResponse.message}
      />
    </div>
  );
};
