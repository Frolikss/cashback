import { CollectionViewCell } from '@components';
import { CollectionViewCellVariants } from '@constants';

interface Props<T> {
  contents: T[];
  variant: CollectionViewCellVariants;
}

export const CollectionView = <T extends object>({ contents, variant }: Props<T>) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {contents.map((contentItem, index) => {
        return <CollectionViewCell key={index} variant={variant} {...contentItem} />;
      })}
    </div>
  );
};
