import { REQUIRED_FIELD, RoleFieldNames, Roles } from '@constants';
import { Field } from '@shared/form-setters';
import { Label, LabelVariants } from '@shared/label';
import { Radio } from '@shared/radio';
import { RoleItem } from '@components';

export const ROLES_FIELDS_DATA: Field[] = [
  {
    label: (
      <Label id={Roles.USER} variant={LabelVariants.ROLES}>
        <RoleItem role="User" />
      </Label>
    ),
    name: RoleFieldNames.ROLE,
    component: Radio,
    type: 'radio',
    id: Roles.USER,
    value: Roles.USER,
    options: {
      required: REQUIRED_FIELD
    }
  },
  {
    label: (
      <Label id={Roles.ADMIN} variant={LabelVariants.ROLES}>
        <RoleItem role="Admin" />
      </Label>
    ),
    name: RoleFieldNames.ROLE,
    component: Radio,
    type: 'radio',
    id: Roles.ADMIN,
    value: Roles.ADMIN,
    options: {
      required: REQUIRED_FIELD
    }
  }
];
