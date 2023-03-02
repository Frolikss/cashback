import { useEffect, useState } from 'react';
import { CollectionViewCellVariants, TABLE_HEADERS } from '@constants';
import { User } from '@interfaces';
import { CollectionView, Footer, Header, TableView } from '@components';
import { asyncGetUsers, selectUserLoading, selectUsers } from '@modules';
import { useAppDispatch, useAppSelector } from '@hooks';

export const ListPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectUserLoading);

  const [isTableView, setIsTableView] = useState(true);

  const getCurrentView = (users: User[]) => {
    return isTableView ? (
      <TableView contents={users} headers={TABLE_HEADERS} />
    ) : (
      <CollectionView variant={CollectionViewCellVariants.USERS} contents={users} />
    );
  };

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch]);

  if (isLoading) return <div className="flex items-center justify-center">Loading</div>;
  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {users ? (
        getCurrentView(users)
      ) : (
        <div className="flex items-center justify-center text-9xl">No data</div>
      )}

      <Footer isTableView={isTableView} setView={setIsTableView} />
    </div>
  );
};
