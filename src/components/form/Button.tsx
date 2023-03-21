import cn from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode, RefObject } from 'react';
import { BUTTON_STYLES, ButtonVariants } from '@constants';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children?: ReactNode;
  customStyle?: string;
}

export const Button: FC<Props> = ({
  variant = ButtonVariants.UTILITY,
  modalRef,
  children,
  customStyle,
  ...props
}) => {
  return (
    <button
      className={cn('self-stretch rounded-lg', BUTTON_STYLES[variant], customStyle)}
      ref={modalRef}
      {...props}>
      {children}
    </button>
  );
};
