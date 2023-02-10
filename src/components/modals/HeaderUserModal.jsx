import React, { useEffect } from 'react';

import { BUTTON_VARIANTS } from '@constants';
import { Button } from '@form';
import avatar from '@png/avatarBig.png';
import { selectUsersState, asyncGetCurrentUser } from '@users';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

export const HeaderUserModal = () => {
  const dispatch = useDispatch();

  const {
    currentUser: { role, id }
  } = useSelector(selectUsersState);

  const logOutOnClick = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    dispatch(asyncGetCurrentUser());
  }, []);

  return (
    <>
      <img className="w-32" src={avatar} alt="avatar" />
      <span className="font-bold">Mona Lisa</span>
      <div className="flex flex-col gap-1 text-base-600 text-center">
        <span>{role}</span>
        <span>{`#${id}`}</span>
      </div>
      <Button variant={cn(BUTTON_VARIANTS.PRIMARY, 'self-stretch')}>
        <>Edit Profile</>
      </Button>
      <Button
        onClick={logOutOnClick}
        variant="w-full text-red-regular font-medium transition duration-300 hover:text-red-darker">
        <>Log Out</>
      </Button>
    </>
  );
};
