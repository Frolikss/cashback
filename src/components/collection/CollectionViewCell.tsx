import { FC } from 'react';
import { COLLECTION_VIEW_CELL_VARIANTS, CellData, CollectionViewCellVariants } from '@constants';
import { ReactComponent as MoreIcon } from '@svg/itemMore.svg';

interface Props {
  variant: CollectionViewCellVariants;
  cellData: CellData;
}

export const CollectionViewCell: FC<Props> = ({ variant, cellData }) => {
  const cells: (string | number)[] = Object.values(cellData);
  const cellsStyles = COLLECTION_VIEW_CELL_VARIANTS[variant];

  return (
    <div className="flex basis-1/4 flex-1 gap-4 justify-between items-center py-2 px-3 bg-base-100 rounded-lg">
      {variant === CollectionViewCellVariants.USERS && (
        <img src={cellsStyles.image} alt="avatar" className="basis-1/4 max-w-[5rem]" />
      )}
      <div className="flex-1">
        {cells.map((cell, index) => (
          <p key={cell} className={cellsStyles.contents[index]}>
            {cell}
          </p>
        ))}
      </div>
      <MoreIcon className="self-start" />
    </div>
  );
};
