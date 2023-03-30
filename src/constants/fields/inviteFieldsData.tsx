import { Link } from 'react-router-dom';
import { EMAIL_OPTIONS, InviteFieldNames } from '@constants';
import { Checkbox } from '@shared/checkbox';
import { Field } from '@shared/form-setters';
import { Input } from '@shared/input';
import { Label, LabelVariants } from '@shared/label';

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
