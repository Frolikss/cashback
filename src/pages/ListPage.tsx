import { useEffect, useState } from 'react';
import { CollectionViewCellVariants, TABLE_HEADERS, User } from '@constants';
import { CollectionView, Footer, Header, TableView } from '@components';
import { asyncGetUsers, selectUserLoading, selectUsersState } from '@users';
import { useAppDispatch, useAppSelector } from '@hooks';

export const ListPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsersState);
  const isLoading = useAppSelector(selectUserLoading);
  const [isTableView, setIsTableView] = useState(true);

  const getCurrentView = (users: Omit<User, 'status' | 'loginToken'>[]) => {
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
