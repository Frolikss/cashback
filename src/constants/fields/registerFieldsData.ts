import { FieldValues } from 'react-hook-form';
import {
  EMAIL_PATTERN,
  FieldNames,
  INVALID_EMAIL,
  MIN_PASS_LENGTH,
  PASSWORDS_NOT_MATCHING,
  PHONE_LENGTH_MESSAGE,
  PHONE_NUMBER_PATTERN,
  PHONE_PATTERN_MESSAGE,
  REQUIRED_FIELD
} from '@constants';
import { Field } from '@interfaces';
import { Input } from '@components';

export const REGISTER_FIELDS_DATA: Field[] = [
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
    name: FieldNames.PHONE,
    component: Input,
    type: 'tel',
    placeholder: 'Phone',
    options: {
      required: REQUIRED_FIELD,
      minLength: {
        value: 6,
        message: PHONE_LENGTH_MESSAGE
      },
      maxLength: {
        value: 12,
        message: PHONE_LENGTH_MESSAGE
      },
      pattern: {
        value: PHONE_NUMBER_PATTERN,
        message: PHONE_PATTERN_MESSAGE
      }
    }
  },
  {
    name: FieldNames.PASSWORD,
    component: Input,
    type: 'password',
    placeholder: 'Password',
    options: {
      required: {
        value: true,
        message: REQUIRED_FIELD
      },
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  },
  {
    name: FieldNames.CONFIRM_PASSWORD,
    component: Input,
    type: 'password',
    placeholder: 'Confirm Password',
    options: {
      required: {
        value: true,
        message: REQUIRED_FIELD
      },
      validate: (value: string, formValues: FieldValues) => {
        if (value !== formValues.password) {
          return PASSWORDS_NOT_MATCHING;
        }
      }
    }
  }
];
