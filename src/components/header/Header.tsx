import cn from 'classnames';
import { ButtonVariants, HEADER_MODALS, ModalVariants, OVERLAY_STYLE } from '@constants';
import { HeaderMenuModal, HeaderModal, ModalWrapper } from '@components';
import { Button } from '@form';
import { useModal } from '@hooks';
import { ReactComponent as MenuIcon } from '@svg/menu.svg';

export const Header = () => {
  const { modalOpened, toggleModalOpened, btnRef } = useModal();

  return (
    <>
      <header className="z-10 relative container mx-auto bg-base-100 rounded-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          <Button modalRef={btnRef} variant={ButtonVariants.PRIMARY} onClick={toggleModalOpened}>
            <MenuIcon className="pointer-events-none" />
          </Button>
          <span className="text-base-1000 text-2xl font-bold">Admin Users</span>
          <ModalWrapper isOpened={modalOpened} variant={ModalVariants.LEFT_SIDE}>
            <HeaderMenuModal />
          </ModalWrapper>
        </div>
        <div className="flex gap-4">
          {HEADER_MODALS.map((modal, index) => (
            <HeaderModal key={index} {...modal} />
          ))}
        </div>
      </header>
      <span
        className={cn(OVERLAY_STYLE, {
          hidden: !modalOpened
        })}
      />
    </>
  );
};
