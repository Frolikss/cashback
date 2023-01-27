import React from 'react';

import avatar from '@assets/png/avatarBig.png';

export const UserModal = () => {
  return (
    <>
      <img className="w-32" src={avatar} alt="avatar" />
      <span className="font-bold">Mona Lisa</span>
      <div className="flex flex-col gap-1 text-base-600">
        <span className="text-center">Admin</span>
        <span className="text-center">#12312312</span>
      </div>
      <button className="bg-accent-primary rounded-lg text-base-100 w-full py-3 font-bold">
        Edit Profile
      </button>
      <button className="w-full text-red-regular font-medium">Log Out</button>
    </>
  );
};
