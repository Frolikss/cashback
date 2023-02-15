import { TableRow } from '@components';
import { Button } from '@form';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import PropTypes from 'prop-types';
import React from 'react';

export const TableView = ({ contents, variant }) => {
  return (
    <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
            {variant.head.map((heading, index) => {
              return (
                <th key={index}>
                  <Button variant="flex items-center gap-1 font-normal text-base-600">
                    <>
                      {heading}
                      <ArrowIcon />
                    </>
                  </Button>
                </th>
              );
            })}
            {variant.buttons && <th className="font-normal text-lg text-base-600">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {contents.map((contentItem) => (
            <TableRow
              key={contentItem.id}
              image={variant?.image}
              variant={variant.buttons}
              {...contentItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableView.propTypes = {
  contents: PropTypes.array,
  variant: PropTypes.object
};
