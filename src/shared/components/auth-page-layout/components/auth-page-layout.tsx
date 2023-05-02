import { FC, ReactNode } from 'react';

import { ReactComponent as LogoIcon } from '@svg/logo.svg';

import { AuthLayoutContent } from '../types/layout.content.interfaces';

interface Props {
  textContent: AuthLayoutContent;
  children: ReactNode;
}

export const AuthPageLayout: FC<Props> = ({ textContent, children }) => {
  return (
    <div className="parent w-full flex md:items-center justify-end bg-login flex-col-reverse md:flex-row">
      <div className="md:basis-2/4 lg:basis-1/3 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div>
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">{textContent.header}</h2>
          <p className="text-base-500 text-lg">{textContent.subheader}</p>
        </div>
        {children}
      </div>
      <div className="absolute md:static px-4 w-full ms:w-auto basis-1/3 md:basis-2/4 lg:basis-2/3 flex items-center justify-center text-center">
        <LogoIcon />
      </div>
    </div>
  );
};
