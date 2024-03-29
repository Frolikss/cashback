import cn from 'classnames';

import { Button, ButtonVariants } from '@shared/components/button';
import { ModalVariants, ModalWrapper } from '@shared/components/modal-wrapper';
import { useModal } from '@shared/lib';

import { MenuModal } from '@entities/menu-modal';

import { ReactComponent as MenuIcon } from '@svg/menu.svg';

import { HEADER_MODALS } from '../constants/header-content';
import { HeaderModal } from './header-modal';

export const Header = () => {
  const { modalOpened, btnRef, openModal, closeModal } = useModal(true);

  const handleModalButtonClick = modalOpened ? closeModal : openModal;

  return (
    <>
      <header className="z-10 relative container mx-auto bg-base-100 rounded-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Button
            modalRef={btnRef}
            variant={ButtonVariants.PRIMARY}
            onClick={handleModalButtonClick}
          >
            <MenuIcon className="pointer-events-none" />
          </Button>
          <span className="text-base-1000 text-2xl font-bold">Admin Users</span>
          <ModalWrapper isOpened={modalOpened} variant={ModalVariants.LEFT_SIDE}>
            <MenuModal />
          </ModalWrapper>
        </div>
        <div className="flex gap-4">
          {HEADER_MODALS.map((modal) => (
            <HeaderModal key={modal.id} {...modal} />
          ))}
        </div>
      </header>
      <span
        className={cn('block fixed w-screen h-screen bg-base-1000 opacity-50 top-0 right-0', {
          hidden: !modalOpened
        })}
      />
    </>
  );
};
