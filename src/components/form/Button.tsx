import React, { FC } from 'react';

interface Props {
  variant?: string;
  modalRef?: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button: FC<Props> = ({ variant, modalRef, children, ...props }) => {
  return (
    <button className={variant} ref={modalRef} {...props}>
      {children}
    </button>
  );
};
