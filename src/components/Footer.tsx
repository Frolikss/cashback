import { Dispatch, FC, SetStateAction } from 'react';
import { ButtonVariants, MAX_LIST_PAGE_ITEMS, PaginationVariants } from '@constants';
import { ListPagination, Select } from '@components';
import { Button } from '@form';
import { ReactComponent as CollectionViewIcon } from '@svg/collectionView.svg';
import { ReactComponent as TableViewIcon } from '@svg/tableView.svg';

interface Props {
  isTableView: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
}

export const Footer: FC<Props> = ({ isTableView, setView }) => {
  const changeViewOnClick = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="container flex justify-between mx-auto bg-base-100 rounded-lg px-6 py-4">
      <div className="flex gap-2.5">
        <Select options={MAX_LIST_PAGE_ITEMS} />
        <Button onClick={changeViewOnClick} variant={ButtonVariants.PRIMARY}>
          {!isTableView ? (
            <CollectionViewIcon className="pointer-events-none w-6 h-6" />
          ) : (
            <TableViewIcon className="pointer-events-none w-6 h-6" />
          )}
        </Button>
      </div>
      <div className="flex">
        <ListPagination variant={PaginationVariants.DEFAULT} />
        <Button variant={ButtonVariants.PRIMARY}>Show All</Button>
      </div>
    </div>
  );
};
