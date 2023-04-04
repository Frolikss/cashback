import { Input } from '@shared/components';
import { EMAIL_OPTIONS, MIN_PASS_LENGTH, REQUIRED_FIELD } from '@shared/constants';
import { Field } from '@shared/types';
import { LoginFieldNames } from './field-names';

export const LOGIN_FIELDS_DATA: Field[] = [
  {
    name: LoginFieldNames.EMAIL,
    component: Input,
    type: 'email',
    placeholder: 'Email',
    options: EMAIL_OPTIONS
  },
  {
    name: LoginFieldNames.PASSWORD,
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
