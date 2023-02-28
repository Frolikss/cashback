import { CellData, CollectionViewCellVariants } from '@constants';
import { CollectionViewCell } from '@components';

interface Props<T> {
  contents: T[];
  variant: CollectionViewCellVariants;
}

export const CollectionView = <T extends CellData>({ contents, variant }: Props<T>) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {contents.map((contentItem) => (
        <CollectionViewCell key={contentItem.id} variant={variant} cellData={contentItem} />
      ))}
    </div>
  );
};
