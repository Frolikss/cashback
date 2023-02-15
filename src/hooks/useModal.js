import { useEffect, useRef, useState } from 'react';

export const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const btnRef = useRef();

  const closeModal = (event) => {
    if (event.target !== btnRef.current) {
      setModalOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeModal);
    return () => document.body.removeEventListener('click', closeModal);
  }, []);

  return [modalOpened, setModalOpened, btnRef];
};
