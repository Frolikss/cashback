import { TABLE_VARIANTS, TableVariants } from '@constants';
import { TableRow } from '@components';
import { Button } from '@form';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';

interface ContentItem {
  id: string;
  email: string;
  phone: string;
  role: string;
}

interface Props<T> {
  contents: T[];
  variant: TableVariants;
}

export const TableView = <T extends ContentItem>({ contents, variant }: Props<T>) => {
  const tableVariant = TABLE_VARIANTS[variant];

  return (
    <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
            {tableVariant.headings.map((heading) => {
              return (
                <th key={heading} className="text-base-600 font-normal">
                  <Button>
                    <>
                      {heading}
                      <ArrowIcon />
                    </>
                  </Button>
                </th>
              );
            })}
            {tableVariant.buttonIcons && (
              <th className="font-normal text-lg text-base-600">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {contents.map((contentItem) => (
            <TableRow
              key={contentItem.id}
              image={tableVariant.image}
              buttonIcons={tableVariant.buttonIcons}
              {...contentItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
