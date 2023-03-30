import { Link } from 'react-router-dom';
import { EMAIL_OPTIONS, InviteFieldNames } from '@constants';
import { Checkbox, Input, Label } from '@shared/components';
import { LabelVariants } from '@shared/constants';
import { Field } from '@shared/types';

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
