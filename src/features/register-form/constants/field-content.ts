import { FieldValues } from 'react-hook-form';
import { Input } from '@shared/components';
import {
  EMAIL_OPTIONS,
  MIN_PASS_LENGTH,
  PHONE_NUMBER_PATTERN,
  REQUIRED_FIELD
} from '@shared/constants';
import { Field } from '@shared/types';
import {
  PASSWORDS_NOT_MATCHING,
  PHONE_LENGTH_MESSAGE,
  PHONE_PATTERN_MESSAGE
} from '../constants/field-messages';
import { RegistrationFieldNames } from './field-names';

export const REGISTER_FIELDS_DATA: Field[] = [
  {
    name: RegistrationFieldNames.EMAIL,
    component: Input,
    type: 'email',
    placeholder: 'Email',
    options: EMAIL_OPTIONS
  },
  {
    name: RegistrationFieldNames.PHONE,
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
    name: RegistrationFieldNames.PASSWORD,
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
    name: RegistrationFieldNames.CONFIRM_PASSWORD,
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
