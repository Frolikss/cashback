import cn from 'classnames';
import { FC, ReactNode, RefObject } from 'react';
import { BUTTON_STYLES, ButtonVariants } from '@constants';

interface Props {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
  onClick?(): void;
}

export const Button: FC<Props> = ({ variant, modalRef, children, ...props }) => {
  return (
    <button
      className={cn(variant ? BUTTON_STYLES[variant] : '', 'flex-1 rounded-lg')}
      ref={modalRef}
      {...props}>
      {children}
    </button>
  );
};
