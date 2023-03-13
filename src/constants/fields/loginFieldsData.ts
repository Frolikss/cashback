import {
  EMAIL_PATTERN,
  FieldNames,
  INVALID_EMAIL,
  MIN_PASS_LENGTH,
  REQUIRED_FIELD
} from '@constants';
import { Field } from '@interfaces';
import { Input, InputProps } from '@components';

export const LOGIN_FIELDS_DATA: Field[] = [
  {
    name: FieldNames.EMAIL,
    component: Input,
    type: 'email',
    placeholder: 'Email',
    options: {
      required: REQUIRED_FIELD,
      pattern: {
        value: EMAIL_PATTERN,
        message: INVALID_EMAIL
      }
    }
  },
  {
    name: FieldNames.PASSWORD,
    component: Input,
    type: 'password',
    placeholder: 'Password',
    options: {
      required: REQUIRED_FIELD,
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  }
];
