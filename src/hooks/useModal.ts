import { RefObject, useEffect, useRef, useState } from 'react';

export const useModal = (): {
  modalOpened: boolean;
  openModal: () => void;
  btnRef: RefObject<HTMLButtonElement>;
} => {
  const [modalOpened, setModalOpened] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const openModal = () => setModalOpened(true);

  const closeModal = (event: Event) => {
    if (event.target !== btnRef.current) {
      setModalOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeModal);
    return () => document.body.removeEventListener('click', closeModal);
  }, []);

  return { modalOpened, openModal, btnRef };
};
