import cn from 'classnames';
import { FC, MouseEvent, useState } from 'react';
import { ReactComponent as DropdownIcon } from '@svg/selectArrow.svg';

interface SelectOption {
  id: number;
  value: string;
}

interface Props {
  options: SelectOption[];
}

const VALUE_DIV_STYLE =
  'rounded-lg select-none relative text-xl flex items-center gap-2 px-2 focus:outline-none bg-no-repeat bg-right-center text-base-100 bg-accent-light hover:bg-accent-dark';
const OPTIONS_DIV_STYLE = `block px-2 absolute text-xl flex flex-col gap-2 w-2/3 rounded-lg rounded-b-none left-0 bottom-full bg-accent-light after:content-[''] after:absolute after:bg-contain after:bg-no-repeat after:h-[8px] after:w-[8px] after:bottom-0 after:-right-2 after:bg-corner`;

export const Select: FC<Props> = ({ options }) => {
  const [initialValue, setInitialValue] = useState(options[0]);
  const [isOpened, setIsOpened] = useState(false);

  const optionOnClick = (id: number, event: MouseEvent<HTMLSpanElement>) => {
    const currentTarget = event.currentTarget;
    if (currentTarget.textContent !== null) {
      setInitialValue({ id, value: currentTarget.textContent });
    }
  };

  const modalOnClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      onClick={modalOnClick}
      className={cn(VALUE_DIV_STYLE, {
        'rounded-tl-none hover:bg-accent-light': isOpened
      })}>
      {initialValue.value}
      <DropdownIcon />
      <div
        className={cn(OPTIONS_DIV_STYLE, {
          hidden: !isOpened
        })}>
        {options
          .sort((a, b) => b.id - a.id)
          .map((option, index) => {
            if (option.id === initialValue.id) return null;
            return (
              <span key={index} onClick={(event) => optionOnClick(option.id, event)}>
                {option.value}
              </span>
            );
          })}
      </div>
    </div>
  );
};
