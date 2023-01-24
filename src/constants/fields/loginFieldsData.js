import { Input } from '@components/Form/Input';
import { EMAIL_PATTERN, INVALID_EMAIL, MIN_PASS_LENGTH } from '@constants';

export const loginFieldsData = [
  {
    name: 'email',
    component: Input,
    type: 'email',
    placeholder: 'Email',
    className:
      'bg-base-100 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-base-600 active:placeholder:text-base-600 outline-none hover:outline-3 focus:bg-base-100 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-accent-primary focus:outline-accent-primary hover:bg-accent-lighter hover:placeholder:text-accent-dark',
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
    className:
      'bg-base-100 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-base-600 active:placeholder:text-base-600 outline-none hover:outline-3 focus:bg-base-100 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-accent-primary focus:outline-accent-primary hover:bg-accent-lighter hover:placeholder:text-accent-dark',
    validation: {
      required: true,
      minLength: {
        value: 6,
        message: MIN_PASS_LENGTH
      }
    }
  }
];
