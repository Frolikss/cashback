import { FieldNames, REQUIRED_FIELD, Roles } from '@constants';
import { Field } from '@interfaces';
import { Radio } from '@components';

export const ROLES_FIELDS_DATA: Field[] = [
  {
    withLabel: true,
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
    withLabel: true,
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
