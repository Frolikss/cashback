import { FieldNames, InputVariants, REQUIRED_FIELD } from '@constants';
import { Field } from '@interfaces';
import { Input } from '@components';

export const ROLES_FIELDS_DATA: Field[] = [
  {
    withLabel: true,
    name: FieldNames.ROLE,
    component: Input,
    type: 'radio',
    id: 'user',
    value: 'user',
    variant: InputVariants.RADIO,
    options: {
      required: REQUIRED_FIELD
    }
  },
  {
    withLabel: true,
    name: FieldNames.ROLE,
    component: Input,
    type: 'radio',
    id: 'admin',
    value: 'admin',
    variant: InputVariants.RADIO,
    options: {
      required: REQUIRED_FIELD
    }
  }
];
