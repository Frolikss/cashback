import {
  ButtonVariants,
  CollectionViewCellVariants,
  CollectionViewVariant,
  InputVariants,
  MenuVariantStyle,
  MenuVariants,
  ModalVariants,
  PaginationVariants
} from '@constants';
import avatarBig from '@png/avatarBig.png';

export const BUTTON_STYLES: { [key in ButtonVariants]: string } = {
  [ButtonVariants.PRIMARY]:
    'text-base-100 bg-accent-primary font-eUkraine font-medium text-lg p-3 leading-5 transition duration-300 hover:bg-accent-dark',
  [ButtonVariants.SECONDARY]:
    'text-accent-primary border-3 border-accent-primary hover:border-accent-dark',
  [ButtonVariants.TERTIARY]:
    'w-full text-red-regular font-medium transition duration-300 hover:text-red-darker',
  [ButtonVariants.UTILITY]:
    'hover:bg-base-200/70 p-0.5 transition-all duration-300 bg-base-100 rounded-full flex items-center justify-center'
};

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

export const MODAL_STYLES: { [key in ModalVariants]: string } = {
  [ModalVariants.RIGHT_SIDE]: 'absolute right-0 items-center',
  [ModalVariants.LEFT_SIDE]: 'absolute left-0'
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

export const INPUT_STYLES: { [key in InputVariants]: string } = {
  [InputVariants.PRIMARY]:
    'bg-base-100 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-base-600 active:placeholder:text-base-600 outline-none hover:outline-3 focus:bg-base-100 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-accent-primary focus:outline-accent-primary hover:bg-accent-lighter hover:placeholder:text-accent-dark'
};

export const PAGINATION_STYLES: { [key in PaginationVariants]: string } = {
  [PaginationVariants.DEFAULT]:
    'flex gap-4 items-center [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:w-2.5 [&>*]:h-2.5 [&>*]:cursor-pointer [&>*]:p-5'
};
