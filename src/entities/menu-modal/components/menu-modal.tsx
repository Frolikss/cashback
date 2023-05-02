import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '@svg/logoColored.svg';

import { MODAL_MENU_CONTENT } from '../constants/menu-content';
import { MenuListItem } from './menu-list-item';

export const MenuModal: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-10">
      <Logo />
      <nav>
        <ul className="flex flex-col gap-8 text-xl text-base-1000">
          {MODAL_MENU_CONTENT.map((menuItem) => (
            <MenuListItem key={menuItem.name} pathname={pathname} {...menuItem} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
