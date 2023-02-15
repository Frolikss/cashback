import { Button } from '@form';
import PropTypes from 'prop-types';
import React from 'react';

export const TableRow = ({ image, variant, ...props }) => {
  const cells = Object.values(props);

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

      {variant && (
        <td className="text-right">
          {variant.map((Icon, index) => (
            <Button key={index}>
              <Icon />
            </Button>
          ))}
        </td>
      )}
    </tr>
  );
};

TableRow.propTypes = {
  variant: PropTypes.array,
  image: PropTypes.string,
  cells: PropTypes.object
};
