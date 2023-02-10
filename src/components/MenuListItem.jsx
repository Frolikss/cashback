import React from 'react';

import { MENU_VARIANTS } from '@constants';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MenuListItem = ({ name, route, pathname, icon: Icon }) => {
  const variant = route === pathname ? MENU_VARIANTS.active : MENU_VARIANTS.default;

  return (
    <li key={name} className="group">
      <Link to={route} className="flex gap-2">
        <span className={variant.list} />
        <div className={variant.container}>
          <Icon className={variant.icon} />
          {name}
        </div>
      </Link>
    </li>
  );
};

MenuListItem.propTypes = {
  name: PropTypes.string,
  pathname: PropTypes.string,
  route: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.object
};
