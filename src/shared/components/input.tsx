import cn from 'classnames';
import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { INPUT_STYLES, InputVariants } from '../constants/input-style-variants';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
}

export const Input: FC<InputProps> = forwardRef(
  ({ variant = InputVariants.PRIMARY, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return <input className={cn(INPUT_STYLES[variant], 'w-full')} {...props} ref={ref} />;
  }
);

Input.displayName = 'Input';
