import { ComponentType, FC, SVGProps } from 'react';
import { ButtonVariants, ModalVariants } from '@constants';
import { ModalWrapper } from '@components';
import { Button } from '@form';
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
  const { modalOpened, openModal, btnRef } = useModal();

  return (
    <>
      <Button
        variant={isHoverable ? ButtonVariants.UTILITY : undefined}
        modalRef={btnRef}
        onClick={openModal}>
        <Icon className={iconStyle} />
      </Button>
      <ModalWrapper isOpened={modalOpened} variant={variant}>
        <Modal />
      </ModalWrapper>
    </>
  );
};
