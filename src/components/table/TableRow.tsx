import React, { FC, SVGProps } from 'react';
import { ButtonVariants } from '@constants';
import { Button } from '@form';

interface Props {
  image?: string;
  buttonIcons: FC<SVGProps<SVGSVGElement>>[];
  role: string;
  id: string;
  phone: string;
  email: string;
}

export const TableRow: FC<Props> = ({ image, buttonIcons, ...props }) => {
  const cells: string[] = Object.values(props);

  return (
    <tr className="[&>*]:py-6 border-b border-base-400">
      {image && (
        <td>
          <div className="flex items-center gap-6 font-bold">
            <img src={image} alt="avatar" className="w-10 h-10" />
            Avery Ross
          </div>
        </td>
      )}

      {cells.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}

      {buttonIcons && (
        <td className="text-right flex">
          {buttonIcons.map((Icon, index) => (
            <Button key={index} variant={ButtonVariants.TABLE}>
              <Icon />
            </Button>
          ))}
        </td>
      )}
    </tr>
  );
};
