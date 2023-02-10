import React, { useEffect, useState } from 'react';

import { Header, TableView, CollectionView, Footer } from '@components';
import { asyncGetUsers, selectUsersState } from '@users';
import { useDispatch, useSelector } from 'react-redux';

export const ListPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsersState);

  const [isTableView, setIsTableView] = useState(true);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {isTableView ? <TableView users={users} /> : <CollectionView users={users} />}
      <Footer viewType={isTableView} setView={setIsTableView} />
    </div>
  );
};
