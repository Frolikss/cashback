import { RefObject, useEffect, useRef, useState } from 'react';

export const useModal = (): {
  modalOpened: boolean;
  openModal: () => void;
  closeModal: () => void;
  btnRef: RefObject<HTMLButtonElement>;
} => {
  const [modalOpened, setModalOpened] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const closeModalOnOutsideClick = (event: Event) => {
    if (event.target !== btnRef.current) {
      setModalOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeModalOnOutsideClick);
    return () => document.body.removeEventListener('click', closeModalOnOutsideClick);
  }, [modalOpened]);

  return { modalOpened, openModal, closeModal, btnRef };
};
