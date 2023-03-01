import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionViewCellVariants, TABLE_HEADERS } from '@constants';
import { CollectionView, Footer, Header, TableView } from '@components';
import { asyncGetUsers, selectUsersState } from '@users';

export const ListPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersState);
  const [isTableView, setIsTableView] = useState(true);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch]);

  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {isTableView ? (
        <TableView contents={users} headers={TABLE_HEADERS} />
      ) : (
        <CollectionView variant={CollectionViewCellVariants.USERS} contents={users} />
      )}
      <Footer isTableView={isTableView} setView={setIsTableView} />
    </div>
  );
};
