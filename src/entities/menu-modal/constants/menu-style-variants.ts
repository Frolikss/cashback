import { MenuVariantStyle } from '../types/menu.variant.interface';

export enum MenuVariants {
  ACTIVE = 'active',
  DEFAULT = 'default'
}

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
