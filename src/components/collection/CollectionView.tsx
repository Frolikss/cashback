import { FC } from 'react';
import { CollectionViewCellVariants } from '@constants';
import { User } from '@interfaces';
import { CollectionViewCell } from '@components';

interface Props {
  contents: User[];
  variant: CollectionViewCellVariants;
}

export const CollectionView: FC<Props> = ({ contents, variant }) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {contents.map((contentItem) => (
        <CollectionViewCell key={contentItem.id} variant={variant} cellData={contentItem} />
      ))}
    </div>
  );
};
