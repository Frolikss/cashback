import { CollectionViewCellVariants } from '@constants';
import { CollectionViewCell } from '@components';

interface ContentItem {
  id: string;
  role: string;
  email: string;
}

interface Props<T> {
  contents: T[];
  variant: CollectionViewCellVariants;
}

export const CollectionView = <T extends ContentItem>({ contents, variant }: Props<T>) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {contents.map((contentItem) => (
        <CollectionViewCell key={contentItem.id} variant={variant} {...contentItem} />
      ))}
    </div>
  );
};
