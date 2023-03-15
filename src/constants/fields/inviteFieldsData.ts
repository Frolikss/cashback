import { EMAIL_PATTERN, FieldNames, INVALID_EMAIL, REQUIRED_FIELD } from '@constants';
import { Field } from '@interfaces';
import { Checkbox, Input } from '@components';

export const INVITE_FIELDS_DATA: Field[] = [
  {
    name: FieldNames.INVITE_EMAIL,
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
    id: 'checkbox',
    name: FieldNames.CONFIRM_INVITE_RULES,
    component: Checkbox,
    type: 'checkbox',
    withLabel: true,
    options: {
      pattern: {
        value: EMAIL_PATTERN,
        message: INVALID_EMAIL
      }
    }
  }
];
