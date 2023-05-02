import cn from 'classnames';
import { FC, SVGProps } from 'react';
import { Link } from 'react-router-dom';

import { MENU_STYLES, MenuVariants } from '../constants/menu-style-variants';

interface Props {
  name: string;
  route: string;
  pathname: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const MenuListItem: FC<Props> = ({ name, route, pathname, icon: Icon }) => {
  const menuVariant = route === pathname ? MenuVariants.ACTIVE : MenuVariants.DEFAULT;
  const menuStyles = MENU_STYLES[menuVariant];

  return (
    <li key={name} className="group">
      <Link to={route} className="flex gap-2 rounded-full">
        <span className={cn(menuStyles.listType, 'w-1.5 h-10 rounded-xl')} />
        <div className={cn(menuStyles.wrapperStyle, 'flex flex-1 items-center gap-2 rounded-xl')}>
          {Icon ? <Icon className={menuStyles.iconStyle} /> : <span>?</span>}
          {name}
        </div>
      </Link>
    </li>
  );
};
