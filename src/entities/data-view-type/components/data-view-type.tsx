import { FC, ReactElement } from 'react';
import Skeleton from 'react-loading-skeleton';

interface Props {
  isLoading: boolean;
  isExistingData: boolean;
  componentViewType: ReactElement;
}

export const DataViewType: FC<Props> = ({ isLoading, isExistingData, componentViewType }) => {
  return isLoading ? (
    <div className="rounded-xl p-4 container flex-1 bg-base-100">
      <Skeleton className="bg-base-500 h-1/4" count={5} />
    </div>
  ) : isExistingData ? (
    componentViewType
  ) : (
    <div className="flex items-center justify-center text-9xl">No data</div>
  );
};
