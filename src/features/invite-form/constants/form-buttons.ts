import { ButtonVariants } from '@shared/components/button';

import { FormButton } from '@entities/form-buttons';

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
