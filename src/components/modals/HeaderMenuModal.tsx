import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { MODAL_MENU_CONTENT } from '@constants';
import { MenuListItem } from '@components';
import { ReactComponent as Logo } from '@svg/logoColored.svg';

export const HeaderMenuModal: FC = () => {
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
