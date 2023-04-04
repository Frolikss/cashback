import { useState } from 'react';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { ViewType } from '@widgets/users-view-type';
import 'react-loading-skeleton/dist/skeleton.css';

export const UsersPage = () => {
  const [isTableView, setIsTableView] = useState(true);

  return (
    <div className="min-h-screen select-none bg-base-200 p-4 flex flex-col items-center gap-10 justify-between font-eUkraine text-lg">
      <Header />
      <ViewType isTableView={isTableView} />
      <Footer isTableView={isTableView} setView={setIsTableView} />
    </div>
  );
};
