import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useModal = (
  isOutsideClickable?: boolean
): {
  modalOpened: boolean;
  openModal: () => void;
  closeModal: () => void;
  btnRef: RefObject<HTMLButtonElement>;
} => {
  const [modalOpened, setModalOpened] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const closeModalOnOutsideClick = useCallback(
    (event: Event) => {
      if (event.target !== btnRef.current && isOutsideClickable) {
        setModalOpened(false);
      }
    },
    [isOutsideClickable]
  );

  useEffect(() => {
    document.body.addEventListener('click', closeModalOnOutsideClick);
    return () => document.body.removeEventListener('click', closeModalOnOutsideClick);
  }, [modalOpened, closeModalOnOutsideClick]);

  return { modalOpened, openModal, closeModal, btnRef };
};
