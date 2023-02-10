import React from 'react';

import PropTypes from 'prop-types';

export const TableRow = ({ ...props }) => {
  const cells = Object.values(props);

  return (
    <tr className="[&>*]:py-6 border-b border-base-400">
      {cells.map((cell) => (
        <td key={cell}>{cell}</td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  cells: PropTypes.object
};
