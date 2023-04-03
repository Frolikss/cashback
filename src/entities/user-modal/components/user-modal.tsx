import { FC, useEffect } from 'react';
import { Button } from '@shared/components';
import { AuthTokenNames, ButtonVariants } from '@shared/constants';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { asyncGetCurrentUser, selectCurrentUser } from '@modules';
import avatar from '@png/avatarBig.png';

export const UserModal: FC = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);

  const logOutOnClick = () => {
    localStorage.removeItem(AuthTokenNames.ACCESS);
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
