import { EMAIL_OPTIONS, LoginFieldNames, MIN_PASS_LENGTH, REQUIRED_FIELD } from '@constants';
import { Field } from '@interfaces';
import { Input } from '@components';

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
