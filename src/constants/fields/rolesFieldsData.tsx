import { FieldNames, LabelVariants, REQUIRED_FIELD, Roles } from '@constants';
import { Field } from '@interfaces';
import { Label, Radio, RoleItem } from '@components';

export const ROLES_FIELDS_DATA: Field[] = [
  {
    label: (
      <Label id={Roles.USER} variant={LabelVariants.ROLES}>
        <RoleItem role="User" />
      </Label>
    ),
    name: FieldNames.ROLE,
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
    name: FieldNames.ROLE,
    component: Radio,
    type: 'radio',
    id: Roles.ADMIN,
    value: Roles.ADMIN,
    options: {
      required: REQUIRED_FIELD
    }
  }
];
