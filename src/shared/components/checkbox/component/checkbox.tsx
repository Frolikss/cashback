import cn from 'classnames';
import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import { CHECKBOX_STYLES, CheckboxVariants } from '../constants/checkbox-style-variants';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: CheckboxVariants;
}

export const Checkbox: FC<CheckboxProps> = forwardRef(
  ({ variant = CheckboxVariants.PRIMARY, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return <input className={cn(CHECKBOX_STYLES[variant])} {...props} ref={ref} />;
  }
);

Checkbox.displayName = 'Checkbox';
