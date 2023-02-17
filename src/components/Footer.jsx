import PropTypes from 'prop-types';
import { ListPagination, Select } from '@components';
import { ButtonVariants, MAX_LIST_PAGE_ITEMS } from '@constants';
import { Button } from '@form';
import { ReactComponent as CollectionViewIcon } from '@svg/collectionView.svg';
import { ReactComponent as TableViewIcon } from '@svg/tableView.svg';

export const Footer = ({ viewType, setView }) => {
  const changeViewOnClick = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="container flex justify-between mx-auto bg-base-100 rounded-lg px-6 py-4">
      <div className="flex gap-2.5">
        <Select options={MAX_LIST_PAGE_ITEMS} />
        <Button onClick={changeViewOnClick} variant={ButtonVariants.PRIMARY}>
          {viewType ? (
            <CollectionViewIcon className="pointer-events-none w-6 h-6" />
          ) : (
            <TableViewIcon className="pointer-events-none w-6 h-6" />
          )}
        </Button>
      </div>
      <div className="flex">
        <ListPagination style="flex gap-4 items-center [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:w-2.5 [&>*]:h-2.5 [&>*]:cursor-pointer [&>*]:p-5" />
        <Button variant={ButtonVariants.PRIMARY}>Show All</Button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  viewType: PropTypes.bool,
  setView: PropTypes.func
};
