import { ReactComponent as DropdownIcon } from '@svg/selectArrow.svg';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const Select = ({ options }) => {
  const valueDivStyle =
    'rounded-lg select-none relative text-xl flex items-center gap-2 px-2 focus:outline-none bg-no-repeat bg-right-center text-base-100 bg-accent-light hover:bg-accent-dark';
  const optionsDivStyle = `block px-2 absolute text-xl flex flex-col gap-2 w-2/3 rounded-lg rounded-b-none left-0 bottom-full bg-accent-light after:content-[''] after:absolute after:bg-contain after:bg-no-repeat after:h-[8px] after:w-[8px] after:bottom-0 after:-right-2 after:bg-corner`;

  const [initialValue, setInitialValue] = useState(options[0]);
  const [isOpened, setIsOpened] = useState(false);

  const optionOnClick = (event) => {
    setInitialValue(+event.currentTarget.textContent);
  };

  const modalOnClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      onClick={modalOnClick}
      className={cn(valueDivStyle, {
        'rounded-tl-none hover:bg-accent-light': isOpened
      })}>
      {initialValue}
      <DropdownIcon />
      <div
        className={cn(optionsDivStyle, {
          hidden: !isOpened
        })}>
        {options
          .sort((a, b) => b - a)
          .map((option) => {
            if (option === initialValue) return;
            return (
              <span key={option} onClick={optionOnClick}>
                {option}
              </span>
            );
          })}
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array
};
