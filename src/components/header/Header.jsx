import React from 'react';

import { ModalWrapper, HeaderMenuModal, HeaderModal } from '@components';
import { BUTTON_VARIANTS, MODAL_VARIANTS, OVERLAY_STYLE } from '@constants';
import { HEADER_MODALS } from '@constants/headerModules';
import { Button } from '@form';
import { useModal } from '@hooks/useModal';
import { ReactComponent as MenuIcon } from '@svg/menu.svg';

export const Header = () => {
  const [menuOpened, setMenuOpened, menuBtnRef] = useModal();

  const menuModalOnClick = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <>
      <header className="z-10 relative container mx-auto bg-base-100 rounded-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Button
            modalRef={menuBtnRef}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={menuModalOnClick}
            content={<MenuIcon className="pointer-events-none" />}
            type="button"
          />
          <span className="text-base-1000 text-2xl font-bold">Admin Users</span>
          <ModalWrapper isOpened={menuOpened} variant={MODAL_VARIANTS.LEFT_SIDE}>
            <HeaderMenuModal />
          </ModalWrapper>
        </div>
        <div className="flex gap-4">
          {HEADER_MODALS.map((modal) => (
            <HeaderModal key={modal.variant} {...modal} />
          ))}
        </div>
      </header>
      <span className={menuOpened ? OVERLAY_STYLE : 'hidden'} />
    </>
  );
};
