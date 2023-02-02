import React from 'react';

import { MENU_CONTENT, MENU_VARIANTS } from '@constants';
import { ReactComponent as Logo } from '@svg/logoColored.svg';
import { Link, useLocation } from 'react-router-dom';

export const HeaderMenuModal = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-10">
      <Logo />
      <nav>
        <ul className="flex flex-col gap-8 text-xl text-base-1000">
          {MENU_CONTENT.map(({ name, route, icon: Icon }) => {
            const style = route === pathname ? MENU_VARIANTS.active : MENU_VARIANTS.default;

            return (
              <li key={name} className="group">
                <Link to={route} className="flex gap-2">
                  <span className={style.list} />
                  <div className={style.container}>
                    <Icon className={style.icon} />
                    {name}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
