import { FC, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { MENU_STYLES, MenuVariants } from '@constants';

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
      <Link to={route} className="flex gap-2">
        <span className={menuStyles.list} />
        <div className={menuStyles.container}>
          {Icon ? <Icon className={menuStyles.icon} /> : <span>?</span>}
          {name}
        </div>
      </Link>
    </li>
  );
};
