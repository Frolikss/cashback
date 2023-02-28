import { FC } from 'react';
import { CellData, TableHeader } from '@constants';

interface Props {
  cellData: CellData;
  headers: TableHeader[];
}

export const TableRow: FC<Props> = ({ cellData, headers }) => {
  return (
    <tr className="[&>*]:py-6 border-b border-base-400">
      {headers.map(({ field, defaultValue, component: Component }) => (
        <td key={field} className="last:flex last:justify-end">
          {Component ? (
            <div className="flex items-center gap-2">
              <Component />
              <span>{cellData[field] ?? defaultValue}</span>
            </div>
          ) : (
            <span>{cellData[field]}</span>
          )}
        </td>
      ))}
    </tr>
  );
};
