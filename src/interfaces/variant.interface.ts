import { FC, SVGProps } from 'react';

export interface CollectionViewVariant {
  image?: string;
  contents: string[];
}

export interface TableVariant {
  image?: string;
  headings: string[];
  buttonIcons: FC<SVGProps<SVGSVGElement>>[];
}

export interface MenuVariantStyle {
  listType: string;
  wrapperStyle: string;
  iconStyle: string;
}
