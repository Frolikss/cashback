import { Input } from '@components/form/Input';
import { EMAIL_PATTERN, INVALID_EMAIL, MIN_PASS_LENGTH, INPUT_VARIANTS } from '@constants';

export const LOGIN_FIELDS_DATA = [
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
