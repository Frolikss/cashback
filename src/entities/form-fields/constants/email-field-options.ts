import { RegisterOptions } from 'react-hook-form';

import { INVALID_EMAIL, REQUIRED_FIELD } from './field-error-messages';
import { EMAIL_PATTERN } from './field-patterns';

export const EMAIL_OPTIONS: RegisterOptions = {
  required: REQUIRED_FIELD,
  pattern: {
    value: EMAIL_PATTERN,
    message: INVALID_EMAIL
  }
};
