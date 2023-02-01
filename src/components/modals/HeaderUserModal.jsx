import React, { useEffect, useState } from 'react';

import avatar from '@assets/png/avatarBig.png';
import { BUTTON_VARIANTS, AUTH_TOKEN } from '@constants';
import { Button } from '@form';
import { auth } from '@login';
import { asyncGetCurrentUser } from '@login/actions/asyncGetCurrentUser';
import { useDispatch } from 'react-redux';

export const HeaderUserModal = () => {
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  const {
    currentUser: { role, id }
  } = auth();

  useEffect(() => {
    dispatch(asyncGetCurrentUser());
  }, [isLogged]);

  const logOutOnClick = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsLogged((prev) => !prev);
  };

  return (
    <>
      <img className="w-32" src={avatar} alt="avatar" />
      <span className="font-bold">Mona Lisa</span>
      <div className="flex flex-col gap-1 text-base-600 text-center">
        <span>{role}</span>
        <span>{`#${id}`}</span>
      </div>
      <Button variant={BUTTON_VARIANTS.PRIMARY + ' self-stretch'} text="Edit Profile" />
      <button
        onClick={logOutOnClick}
        className="w-full text-red-regular font-medium transition duration-300 hover:text-red-darker">
        Log Out
      </button>
    </>
  );
};
