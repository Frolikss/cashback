import React, { useEffect } from 'react';

import { ReactComponent as LogoIcon } from '@assets/svg/logo.svg';
import { LoginForm } from '@components';
import { useDispatch } from 'react-redux';

import { asyncGetCurrentUser } from '../modules/login/actions/asyncGetCurrentUser';

export const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetCurrentUser());
  }, []);

  return (
    <div className="parent w-full flex md:items-center justify-end bg-login flex-col-reverse md:flex-row">
      <div className="md:basis-2/4 lg:basis-1/3 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div>
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">Login</h2>
          <p className="text-base-500 text-lg">Login to your account</p>
        </div>
        <LoginForm />
      </div>
      <div className="absolute md:static px-4 w-full ms:w-auto basis-1/3 md:basis-2/4 lg:basis-2/3 flex items-center justify-center text-center">
        <LogoIcon />
      </div>
    </div>
  );
};
