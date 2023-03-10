import { ComponentType, FC, SVGProps } from 'react';
import { ButtonVariants, ModalVariants } from '@constants';
import { Button, ModalWrapper } from '@components';
import { useModal } from '@hooks';

interface Props {
  icon: FC<SVGProps<SVGSVGElement>>;
  modal: ComponentType;
  variant: ModalVariants;
  iconStyle: string;
  isHoverable: boolean;
}

export const HeaderModal: FC<Props> = ({
  icon: Icon,
  modal: Modal,
  variant,
  iconStyle,
  isHoverable
}) => {
  const { modalOpened, btnRef, openModal, closeModal } = useModal();

  const handleModalButtonClick = modalOpened ? closeModal : openModal;

  return (
    <>
      <Button
        variant={isHoverable ? ButtonVariants.UTILITY : undefined}
        modalRef={btnRef}
        onClick={handleModalButtonClick}>
        {Icon ? <Icon className={iconStyle} /> : <span>?</span>}
      </Button>
      <ModalWrapper isOpened={modalOpened} variant={variant}>
        <Modal />
      </ModalWrapper>
    </>
  );
};
