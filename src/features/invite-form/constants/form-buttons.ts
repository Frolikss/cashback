import { ButtonVariants } from '@shared/constants';
import { FormButton } from '@shared/types';

export const INVITE_PAGE_BUTTONS: FormButton[] = [
  {
    id: 1,
    type: 'button',
    variant: ButtonVariants.SECONDARY,
    children: 'Back'
  },
  {
    id: 2,
    type: 'button',
    variant: ButtonVariants.SECONDARY,
    children: 'Skip'
  },
  {
    id: 3,
    variant: ButtonVariants.PRIMARY,
    children: 'Submit'
  }
];
