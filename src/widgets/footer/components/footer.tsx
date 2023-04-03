import { Dispatch, FC, SetStateAction } from 'react';
import { Button, ListPagination, Select } from '@shared/components';
import { ButtonVariants, PaginationVariants } from '@shared/constants';
import { ReactComponent as CollectionViewIcon } from '@svg/collectionView.svg';
import { ReactComponent as TableViewIcon } from '@svg/tableView.svg';
import { MAX_LIST_PAGE_ITEMS } from '../constants/footer-content';

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
