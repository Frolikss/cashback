import { Input } from './Input';
import { EMAIL_PATTERN, INVALID_EMAIL, MIN_PASS_LENGTH } from '@constants';

export const fieldsData = [
  {
    name: 'email',
    Component: Input,
    type: 'email',
    placeholder: 'Email',
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
    Component: Input,
    type: 'password',
    placeholder: 'Password',
    validation: {
      required: true,
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  }
];
