import React, { useEffect, useState } from 'react';

import { Header, TableView, CollectionView, Footer } from '@components';
import { auth } from '@login';
import { asyncGetUsers } from '@login/actions';
import { useDispatch } from 'react-redux';

export const ListPage = () => {
  const dispatch = useDispatch();
  const [viewType, setViewType] = useState(true);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  const { users } = auth();
  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col gap-10 justify-between font-eUkraine text-lg">
      <Header />
      {viewType ? <TableView users={users} /> : <CollectionView users={users} />}
      <Footer viewType={viewType} setView={setViewType} />
    </div>
  );
};
