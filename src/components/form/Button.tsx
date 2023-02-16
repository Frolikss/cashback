import { FC, ReactNode, RefObject } from 'react';
import { BUTTON_STYLES, ButtonVariants } from '@constants';

interface Props {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: FC<Props> = ({
  variant = ButtonVariants.DEFAULT,
  modalRef,
  children,
  ...props
}) => {
  return (
    <button className={BUTTON_STYLES[variant]} ref={modalRef} {...props}>
      {children}
    </button>
  );
};
