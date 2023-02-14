import { ModalWrapper } from '@components';
import { Button } from '@form';
import { useModal } from '@hooks/useModal';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const HeaderModal = ({ icon: Icon, modal: Modal, variant, iconStyle, isHoverable }) => {
  const [modalOpened, setModalOpened, btnRef] = useModal();

  const openModalOnClick = () => {
    setModalOpened((prev) => !prev);
  };

  return (
    <>
      <Button
        variant={cn({
          'hover:bg-base-200/70 transition-all duration-300 bg-base-100 rounded-full': isHoverable
        })}
        modalRef={btnRef}
        onClick={openModalOnClick}>
        <Icon className={iconStyle} />
      </Button>
      <ModalWrapper isOpened={modalOpened} variant={variant}>
        <Modal />
      </ModalWrapper>
    </>
  );
};

HeaderModal.propTypes = {
  icon: PropTypes.object,
  iconStyle: PropTypes.string,
  modal: PropTypes.func,
  variant: PropTypes.string,
  isHoverable: PropTypes.bool
};
