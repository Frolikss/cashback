import React, { useEffect, useRef, useState } from 'react';

import filter from '@assets/svg/filter.svg';
import menu from '@assets/svg/menu.svg';
import notification from '@assets/svg/notification.svg';
import userLogo from '@assets/svg/userLogo.svg';

import { Modal } from './Modal';
import { UserModal } from './UserModal';

export const Header = () => {
  const [userOpened, setUserOpened] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeModal = (event) => {
      if (event.target !== btnRef.current) {
        setUserOpened(false);
      }
    };

    document.body.addEventListener('click', closeModal);

    return () => document.body.removeEventListener('click', closeModal);
  }, []);

  const userModalOnClick = () => {
    setUserOpened((prev) => !prev);
  };

  return (
    <header className="container self-start mx-auto bg-base-100 rounded-lg px-6 py-4 flex items-center justify-between">
      <div className="flex items-center justify-between gap-6">
        <button type="button" className="bg-accent-primary p-1 rounded-lg hover:bg-accent-dark">
          <img src={menu} alt="menu" />
        </button>
        <span className="text-base-1000 text-2xl font-bold">Admin Users</span>
      </div>
      <div className="flex gap-4">
        <button>
          <img src={filter} alt="filter" />
        </button>
        <button>
          <img src={notification} alt="notification" />
        </button>
        <div className="flex items-center">
          <button ref={btnRef} onClick={userModalOnClick}>
            <img className="w-10 h-10 pointer-events-none" src={userLogo} alt="userLogo" />
          </button>
          <Modal isOpened={userOpened}>
            <UserModal />
          </Modal>
        </div>
      </div>
    </header>
  );
};
