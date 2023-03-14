import cn from 'classnames';
import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { RADIO_STYLES, RadioVariants } from '@constants';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: RadioVariants;
}

export const Radio: FC<RadioProps> = forwardRef(
  ({ variant = RadioVariants.PRIMARY, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input type="radio" className={cn(RADIO_STYLES[variant], 'w-full')} {...props} ref={ref} />
    );
  }
);

Radio.displayName = 'Radio';
