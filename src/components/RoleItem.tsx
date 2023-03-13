import { FC } from 'react';

interface Props {
  role: string;
}

export const RoleItem: FC<Props> = ({ role }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-medium">{role}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores dolorum esse
        facilis hic laborum nostrum qui tempora unde voluptatibus? Aliquid impedit iure labore natus
        nihil perferendis quo recusandae, sint! Nostrum qui tempora unde voluptatibus? Aliquid
        impedit iure labore natus nihil perferendis quo recusandae, sint!
      </p>
    </div>
  );
};
