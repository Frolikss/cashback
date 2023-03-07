import { FieldValues } from 'react-hook-form';
import {
  EMAIL_PATTERN,
  INVALID_EMAIL,
  InputVariants,
  MIN_PASS_LENGTH,
  PASSWORDS_NOT_MATCHING,
  PHONE_LENGTH_MESSAGE,
  PHONE_NUMBER_PATTERN,
  PHONE_PATTERN_MESSAGE
} from '@constants';
import { Field } from '@interfaces';
import { Input } from '@components';

export const REGISTER_FIELDS_DATA: Field[] = [
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
    name: 'phone',
    component: Input,
    type: 'tel',
    placeholder: 'Phone',
    variant: InputVariants.PRIMARY,
    options: {
      required: true,
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
  },
  {
    name: 'confirmPassword',
    component: Input,
    type: 'password',
    placeholder: 'Confirm Password',
    variant: InputVariants.PRIMARY,
    options: {
      required: true,
      validate: (value: string, formValues: FieldValues) => {
        if (value !== formValues.password) {
          return PASSWORDS_NOT_MATCHING;
        }
      }
    }
  }
];