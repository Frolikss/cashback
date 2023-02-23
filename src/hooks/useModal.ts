import { RefObject, useEffect, useRef, useState } from 'react';

export const useModal = (): {
  modalOpened: boolean;
  toggleModalOpened: () => void;
  btnRef: RefObject<HTMLButtonElement>;
} => {
  const [modalOpened, setModalOpened] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleModalOpened = () => setModalOpened((prev) => !prev);

  const closeModal = (event: Event) => {
    if (event.target !== btnRef.current) {
      setModalOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeModal);
    return () => document.body.removeEventListener('click', closeModal);
  }, []);

  return { modalOpened, toggleModalOpened, btnRef };
};
