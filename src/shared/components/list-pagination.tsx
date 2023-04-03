import Pagination from 'rc-pagination';
import { FC, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@shared/components/index';
import { ReactComponent as ArrowIcon } from '@svg/paginationArrow.svg';
import { PAGINATION_STYLES, PaginationVariants } from '../constants';

interface Props {
  variant: PaginationVariants;
}

export const ListPagination: FC<Props> = ({ variant }) => {
  const [_, setSearchParams] = useSearchParams();

  const setPageQueryParams = (current: number) => setSearchParams({ page: String(current) });

  const paginationRender = (current: number, type: string, element: ReactNode) => {
    if (type === 'prev' && current !== 0) {
      return (
        <Button>
          <ArrowIcon className="rotate-180" />
        </Button>
      );
    }
    if (type === 'next') {
      return (
        <Button>
          <ArrowIcon />
        </Button>
      );
    }
    if (type === 'jump-next' || type === 'jump-prev') {
      return <span>...</span>;
    }
    return element;
  };

  return (
    <Pagination
      showLessItems={true}
      pageSize={10}
      className={PAGINATION_STYLES[variant]}
      total={100}
      onChange={setPageQueryParams}
      itemRender={paginationRender}
    />
  );
};
