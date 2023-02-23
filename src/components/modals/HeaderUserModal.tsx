import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ACCESS_TOKEN, ButtonVariants } from '@constants';
import { asyncGetCurrentUser, selectCurrentUser } from '@users';
import { Button } from '@form';
import { useAppDispatch } from '@hooks';
import avatar from '@png/avatarBig.png';

export const HeaderUserModal: FC = () => {
  const dispatch = useAppDispatch();

  const { role, id } = useSelector(selectCurrentUser);

  const logOutOnClick = () => {
    localStorage.removeItem(ACCESS_TOKEN);
  };

  useEffect(() => {
    dispatch(asyncGetCurrentUser());
  }, [dispatch]);

  return (
    <>
      <img className="w-32" src={avatar} alt="avatar" />
      <span className="font-bold">Mona Lisa</span>
      <div className="flex flex-col gap-1 text-base-600 text-center">
        <span>{role}</span>
        <span>#{id}</span>
      </div>
      <Button variant={ButtonVariants.PRIMARY}>Edit Profile</Button>
      <Button variant={ButtonVariants.TERTIARY} onClick={logOutOnClick}>
        Log Out
      </Button>
    </>
  );
};
