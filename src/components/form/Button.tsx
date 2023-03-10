import cn from 'classnames';
import { FC, ReactNode, RefObject } from 'react';
import { BUTTON_STYLES, ButtonVariants } from '@constants';

interface Props {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children?: ReactNode;
  onClick?: VoidFunction;
}

export const Button: FC<Props> = ({
  variant = ButtonVariants.UTILITY,
  modalRef,
  children,
  ...props
}) => {
  return (
    <button
      className={cn('self-stretch rounded-lg', BUTTON_STYLES[variant])}
      ref={modalRef}
      {...props}>
      {children}
    </button>
  );
};
