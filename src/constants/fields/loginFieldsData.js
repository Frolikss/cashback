import { Input } from '@components/form/Input';

import { INPUT_VARIANTS } from '../componentsVariants';
import { EMAIL_PATTERN, INVALID_EMAIL, MIN_PASS_LENGTH } from '../constants';
export const loginFieldsData = [
  {
    name: 'email',
    component: Input,
    type: 'email',
    placeholder: 'Email',
    variant: INPUT_VARIANTS.LOGIN,
    validation: {
      required: true,
      pattern: {
        value: EMAIL_PATTERN,
        message: INVALID_EMAIL
      }
    }
  },
  {
    name: 'password',
    component: Input,
    type: 'password',
    placeholder: 'Password',
    variant: INPUT_VARIANTS.LOGIN,
    validation: {
      required: true,
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  }
];
