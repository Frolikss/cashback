import {
  ButtonVariants,
  CollectionViewCellVariants,
  CollectionViewVariant,
  InputVariants
} from '@constants';
import { ReactComponent as CloseIcon } from '@svg/close.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import avatarBig from '@png/avatarBig.png';
import avatarSmall from '@png/avatarSmall.png';

export const BUTTON_STYLES: { [key in ButtonVariants]: string } = {
  [ButtonVariants.PRIMARY]:
    'text-base-100 bg-accent-primary font-eUkraine font-medium text-lg p-3 leading-5 transition duration-300 hover:bg-accent-dark',
  [ButtonVariants.SECONDARY]:
    'text-accent-primary border-3 border-accent-primary hover:border-accent-dark',
  [ButtonVariants.MODAL]:
    'hover:bg-base-200/70 transition-all duration-300 bg-base-100 rounded-full'
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

export const MENU_VARIANTS = {
  ACTIVE: {
    list: 'w-1.5 h-10 bg-accent-dark rounded-full',
    container:
      'flex flex-1 items-center gap-2 bg-accent-primary rounded-xl px-2.5 font-medium text-base-100',
    icon: 'fill-base-100'
  },
  DEFAULT: {
    list: 'w-1.5 h-10 bg-base-200 rounded-full group-hover:bg-accent-primary transition duration-300',
    container:
      'flex flex-1 items-center gap-2 rounded-xl bg-transparent p-0 font-normal text-base-1000 relative left-0 group-hover:translate-x-1 transition duration-300',
    icon: 'fill-base-1000'
  }
};

export const MODAL_VARIANTS = {
  RIGHT_SIDE:
    'absolute mt-4 top-full right-0 bg-base-100 rounded-lg shadow-2xl flex flex-col items-center p-6 gap-4 w-1/3',
  LEFT_SIDE:
    'absolute mt-4 top-full left-0 bg-base-100 rounded-lg shadow-2xl flex flex-col p-6 gap-4 w-1/3'
};

export const INPUT_STYLES: { [key in InputVariants]: string } = {
  [InputVariants.PRIMARY]:
    'bg-base-100 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-base-600 active:placeholder:text-base-600 outline-none hover:outline-3 focus:bg-base-100 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-accent-primary focus:outline-accent-primary hover:bg-accent-lighter hover:placeholder:text-accent-dark'
};

export const TABLE_VARIANTS = {
  USERS: {
    image: avatarSmall,
    head: ['Name', 'Status', 'ID', 'Phone', 'E-mail'],
    buttons: [EditIcon, CloseIcon]
  }
};
