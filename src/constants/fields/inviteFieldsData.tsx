import { Link } from 'react-router-dom';
import {
  EMAIL_PATTERN,
  FieldNames,
  INVALID_EMAIL,
  LabelVariants,
  REQUIRED_FIELD
} from '@constants';
import { Field } from '@interfaces';
import { Checkbox, Input, Label } from '@components';

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
    label: (
      <Label id="checkbox" variant={LabelVariants.CHECKBOX}>
        <Link to="/" className="underline text-accent-darker">
          Lorem ipsum?
        </Link>
      </Label>
    ),
    options: {
      pattern: {
        value: EMAIL_PATTERN,
        message: INVALID_EMAIL
      }
    }
  }
];
