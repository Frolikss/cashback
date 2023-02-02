import React from 'react';

import { ModalWrapper } from '@components';
import { useModal } from '@hooks/useModal';
import PropTypes from 'prop-types';

export const HeaderModal = ({ icon: Icon, modal: Modal, variant, iconStyle }) => {
  const [modalOpened, setModalOpened, btnRef] = useModal();

  const openModalOnClick = () => {
    setModalOpened((prev) => !prev);
  };

  return (
    <>
      <button ref={btnRef} onClick={openModalOnClick}>
        <Icon className={iconStyle} />
      </button>
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
  variant: PropTypes.string
};
