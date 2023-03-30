import cn from 'classnames';
import { HEADER_MODALS, ModalVariants, OVERLAY_STYLE } from '@constants';
import { Button } from '@shared/components';
import { ButtonVariants } from '@shared/constants';
import { HeaderMenuModal, HeaderModal, ModalWrapper } from '@components';
import { useModal } from '@hooks';
import { ReactComponent as MenuIcon } from '@svg/menu.svg';

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
            onClick={handleModalButtonClick}>
            <MenuIcon className="pointer-events-none" />
          </Button>
          <span className="text-base-1000 text-2xl font-bold">Admin Users</span>
          <ModalWrapper isOpened={modalOpened} variant={ModalVariants.LEFT_SIDE}>
            <HeaderMenuModal />
          </ModalWrapper>
        </div>
        <div className="flex gap-4">
          {HEADER_MODALS.map((modal) => (
            <HeaderModal key={modal.id} {...modal} />
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
