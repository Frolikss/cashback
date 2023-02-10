import React from 'react';

import { MenuListItem } from '@components';
import { MODAL_MENU_CONTENT } from '@constants';
import { ReactComponent as Logo } from '@svg/logoColored.svg';
import { useLocation } from 'react-router-dom';

export const HeaderMenuModal = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-10">
      <Logo />
      <nav>
        <ul className="flex flex-col gap-8 text-xl text-base-1000">
          {MODAL_MENU_CONTENT.map((menuItem) => {
            return <MenuListItem key={menuItem.name} pathname={pathname} {...menuItem} />;
          })}
        </ul>
      </nav>
    </div>
  );
};
