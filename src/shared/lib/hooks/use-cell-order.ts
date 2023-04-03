import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useCellOrder = (): { setCellOrder: (field: string) => void } => {
  const [order, setOrder] = useState(false);
  const [_, setSearchParams] = useSearchParams();

  const setCellOrder = (field: string) => {
    setOrder((prev) => !prev);
    setSearchParams({ sort: field, order: order ? 'asc' : 'desc' });
  };

  return { setCellOrder };
};
