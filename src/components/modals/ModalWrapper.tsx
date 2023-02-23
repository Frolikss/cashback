import cn from 'classnames';
import React, { FC, MouseEvent, ReactNode } from 'react';
import { MODAL_STYLES, ModalVariants } from '@constants';

interface Props {
  children: ReactNode;
  isOpened: boolean;
  variant: ModalVariants;
}

export const ModalWrapper: FC<Props> = ({ children, isOpened, variant }) => {
  const clickOutsideDiv = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  if (!isOpened) return null;
  return (
    <div
      onClick={clickOutsideDiv}
      className={cn(
        MODAL_STYLES[variant],
        'mt-4 top-full bg-base-100 rounded-lg shadow-2xl flex flex-col p-6 gap-4 w-1/3'
      )}>
      {children}
    </div>
  );
};
