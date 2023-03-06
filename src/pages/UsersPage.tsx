import Table from 'rc-table';
import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CollectionViewCellVariants, getColumns } from '@constants';
import { CollectionView, Footer, Header } from '@components';
import { asyncGetUsers, selectUserLoading, selectUsers } from '@modules';
import { useAppDispatch, useAppSelector, useCellOrder } from '@hooks';
import 'react-loading-skeleton/dist/skeleton.css';

export const UsersPage = () => {
  const { setCellOrder } = useCellOrder();
  const [isTableView, setIsTableView] = useState(true);

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectUserLoading);

  const componentViewType = useMemo(() => {
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
    dispatch(asyncGetUsers({ page: 1, per_page: 10 }));
  }, [dispatch]);

  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col items-center gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {isLoading ? (
        <div className="rounded-xl p-4 container flex-1 bg-base-100">
          <Skeleton className="bg-base-500 h-1/4" count={5} />
        </div>
      ) : users ? (
        componentViewType
      ) : (
        <div className="flex items-center justify-center text-9xl">No data</div>
      )}
      <Footer isTableView={isTableView} setView={setIsTableView} />
    </div>
  );
};
