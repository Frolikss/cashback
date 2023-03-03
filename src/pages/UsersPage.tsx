import Table from 'rc-table';
import { useEffect, useMemo, useState } from 'react';
import { CollectionViewCellVariants, getColumns } from '@constants';
import { CollectionView, Footer, Header } from '@components';
import { asyncGetUsers, selectUserLoading, selectUsers } from '@modules';
import { useAppDispatch, useAppSelector, useCellOrder } from '@hooks';

export const UsersPage = () => {
  const { setCellOrder } = useCellOrder();
  const [isTableView, setIsTableView] = useState(true);

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectUserLoading);

  const usersListView = useMemo(() => {
    const usersData = users ?? [];

    return isTableView ? (
      <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
        <Table
          data={usersData}
          columns={getColumns(setCellOrder)}
          rowKey={(user) => user.id}
          className="w-full"
        />
      </div>
    ) : (
      <CollectionView variant={CollectionViewCellVariants.USERS} contents={usersData} />
    );
  }, [isTableView, users, setCellOrder]);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch]);

  if (isLoading) return <div className="flex items-center justify-center">Loading</div>;
  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {users ? (
        usersListView
      ) : (
        <div className="flex items-center justify-center text-9xl">No data</div>
      )}
      <Footer isTableView={isTableView} setView={setIsTableView} />
    </div>
  );
};
