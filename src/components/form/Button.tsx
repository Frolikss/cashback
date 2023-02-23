import cn from 'classnames';
import { FC, ReactNode, RefObject } from 'react';
import { BUTTON_STYLES, ButtonVariants } from '@constants';

interface Props {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
  onClick?: VoidFunction;
}

export const Button: FC<Props> = ({ variant, modalRef, children, ...props }) => {
  return (
    <button
      className={cn('self-stretch flex-1 rounded-lg', variant ? BUTTON_STYLES[variant] : '')}
      ref={modalRef}
      {...props}>
      {children}
    </button>
  );
};
