import cn from 'classnames';
import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import { RADIO_STYLES, RadioVariants } from '../constants/radio-style-variants';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: RadioVariants;
}

export const Radio: FC<RadioProps> = forwardRef(
  ({ variant = RadioVariants.PRIMARY, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return <input type="radio" className={cn(RADIO_STYLES[variant])} {...props} ref={ref} />;
  }
);

Radio.displayName = 'Radio';
