import avatarBig from '@png/avatarBig.png';

import { CollectionViewVariant } from '../types/cell-variants';

export enum CollectionViewCellVariants {
  USERS = 'users'
}

export const COLLECTION_VIEW_CELL_VARIANTS: {
  [key in CollectionViewCellVariants]: CollectionViewVariant;
} = {
  [CollectionViewCellVariants.USERS]: {
    image: avatarBig,
    contents: [
      'font-bold',
      'text-base-700 text-base flex-1',
      'inline text-base-700',
      'inline-block pl-2 text-base-700'
    ]
  }
};
