import {
  CheckboxVariants,
  CollectionViewCellVariants,
  ListVariants,
  MenuVariants,
  RadioVariants
} from '@constants';
import { CollectionViewVariant, MenuVariantStyle } from '@interfaces';
import avatarBig from '@png/avatarBig.png';

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

export const MENU_STYLES: { [key in MenuVariants]: MenuVariantStyle } = {
  [MenuVariants.ACTIVE]: {
    listType: 'bg-accent-dark',
    wrapperStyle: 'bg-accent-primary px-2.5 font-medium text-base-100',
    iconStyle: 'fill-base-100'
  },
  [MenuVariants.DEFAULT]: {
    listType: 'bg-base-200 group-hover:bg-accent-primary transition duration-300',
    wrapperStyle:
      'bg-transparent p-0 font-normal text-base-1000 relative left-0 group-hover:translate-x-1 transition duration-300',
    iconStyle: 'fill-base-1000'
  }
};

export const RADIO_STYLES: { [key in RadioVariants]: string } = {
  [RadioVariants.PRIMARY]: 'peer checked:bg-base-1000 appearance-none'
};

export const CHECKBOX_STYLES: { [key in CheckboxVariants]: string } = {
  [CheckboxVariants.PRIMARY]: 'accent-accent-primary'
};

export const LIST_STYLES: { [key in ListVariants]: string } = {
  [ListVariants.PRIMARY]: 'border-b-1 border-b-base-700 p-2'
};
