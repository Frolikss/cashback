import React from 'react';
import avatarSmall from '@png/avatarSmall.png';

export const Avatar = () => {
  return (
    <div className="flex items-center gap-6 font-bold">
      <img src={avatarSmall} alt="avatar" className="w-10 h-10" />
      Avery Ross
    </div>
  );
};
