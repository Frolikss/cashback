import { FieldNames, REQUIRED_FIELD, Roles } from '@constants';
import { Field } from '@interfaces';
import { Radio } from '../../components/form/Radio';

export const ROLES_FIELDS_DATA: Field[] = [
  {
    withLabel: true,
    name: FieldNames.ROLE,
    component: Radio,
    type: 'radio',
    id: Roles.USER,
    value: 'user',
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
    value: 'admin',
    options: {
      required: REQUIRED_FIELD
    }
  }
];
