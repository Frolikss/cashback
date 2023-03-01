import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CellData, TableHeader } from '@constants';
import { TableRow } from '@components';
import { Button } from '@form';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';

interface Props<T> {
  contents: T[];
  headers: TableHeader[];
}

export const TableView = <T extends CellData>({ contents, headers }: Props<T>) => {
  const [order, setOrder] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const setCellOrder = (field: string) => {
    setOrder((prev) => !prev);
    setSearchParams({ sort: field, order: order ? 'asc' : 'desc' });
  };

  return (
    <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
            {headers.map(({ header, field, isSortable }) => {
              return isSortable ? (
                <th key={header} className="text-base-600 font-normal">
                  <Button onClick={() => setCellOrder(field)}>
                    <>
                      {header}
                      <ArrowIcon />
                    </>
                  </Button>
                </th>
              ) : (
                <th key={header} className="font-normal text-lg text-base-600">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {contents.map((contentItem) => (
            <TableRow cellData={contentItem} headers={headers} key={contentItem.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
