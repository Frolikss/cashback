import { FC, ReactNode } from 'react';

import { LABEL_STYLES, LabelVariants } from '../constants/label-style-variants';

interface Props {
  id: string;
  variant?: LabelVariants;
  children?: ReactNode;
}

export const Label: FC<Props> = ({ id, variant = LabelVariants.ROLES, children }) => {
  return (
    <label htmlFor={id} className={LABEL_STYLES[variant]}>
      {children}
    </label>
  );
};
