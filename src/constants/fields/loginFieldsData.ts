import { EMAIL_PATTERN, Field, INVALID_EMAIL, InputVariants, MIN_PASS_LENGTH } from '@constants';
import { Input } from '@form';

export const LOGIN_FIELDS_DATA: Field[] = [
  {
    name: 'email',
    component: Input,
    type: 'email',
    placeholder: 'Email',
    variant: InputVariants.PRIMARY,
    options: {
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
    variant: InputVariants.PRIMARY,
    options: {
      required: true,
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  }
];