import { FC, useEffect } from 'react';
import { ACCESS_TOKEN } from '@constants';
import { Button, ButtonVariants } from '@shared/button';
import { asyncGetCurrentUser, selectCurrentUser } from '@modules';
import { useAppDispatch, useAppSelector } from '@hooks';
import avatar from '@png/avatarBig.png';

export const HeaderUserModal: FC = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);

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
        {!currentUser ? (
          <div>Failed loading user data</div>
        ) : (
          <>
            <span>{currentUser.role}</span>
            <span>#{currentUser.id}</span>
          </>
        )}
      </div>
      <Button variant={ButtonVariants.PRIMARY}>Edit Profile</Button>
      <Button variant={ButtonVariants.TERTIARY} onClick={logOutOnClick}>
        Log Out
      </Button>
    </>
  );
};
