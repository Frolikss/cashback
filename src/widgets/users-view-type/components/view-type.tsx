import Table from 'rc-table';
import { FC, useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@shared/lib';

import { CollectionView, CollectionViewCellVariants } from '@entities/collection-view';
import { DataViewType } from '@entities/data-view-type';

import { useCellOrder } from '@widgets/users-view-type/lib/hooks/use-cell-order';

import { getColumns } from '../constants/columns-content';
import { asyncGetUsers, selectUserLoading, selectUsers } from '../model/users';

interface Props {
  isTableView: boolean;
}

export const ViewType: FC<Props> = ({ isTableView }) => {
  const { setCellOrder } = useCellOrder();

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
    dispatch(asyncGetUsers());
  }, [dispatch]);

  return (
    <DataViewType
      isLoading={isLoading}
      isExistingData={Boolean(users)}
      componentViewType={componentViewType}
    />
  );
};
