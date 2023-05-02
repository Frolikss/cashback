import { Link } from 'react-router-dom';

import { Checkbox } from '@shared/components/checkbox';
import { Input } from '@shared/components/input';
import { Label, LabelVariants } from '@shared/components/label';

import { EMAIL_OPTIONS, Field } from '@entities/form-fields';

import { InviteFieldNames } from '../constants/field-names';

export const INVITE_FIELDS_DATA: Field[] = [
  {
    name: InviteFieldNames.INVITE_EMAIL,
    component: Input,
    type: 'email',
    placeholder: 'Email',
    options: EMAIL_OPTIONS
  },
  {
    id: 'checkbox',
    name: InviteFieldNames.CONFIRM_INVITE_RULES,
    component: Checkbox,
    type: 'checkbox',
    label: (
      <Label id="checkbox" variant={LabelVariants.CHECKBOX}>
        <Link to="/" className="underline text-accent-darker">
          Lorem ipsum?
        </Link>
      </Label>
    )
  }
];
