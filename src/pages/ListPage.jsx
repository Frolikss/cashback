import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionView, Footer, Header, TableView } from '@components';
import { CollectionViewCellVariants, TABLE_VARIANTS } from '@constants';
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
        <TableView contents={users} variant={TABLE_VARIANTS.USERS} />
      ) : (
        <CollectionView contents={users} variant={CollectionViewCellVariants.USERS} />
      )}
      <Footer viewType={isTableView} setView={setIsTableView} />
    </div>
  );
};
