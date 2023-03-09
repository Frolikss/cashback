import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES, ButtonVariants } from '@constants';
import { AuthTypeContent, Field } from '@interfaces';
import { Button, FillForm } from '@components';

interface Props {
  fields: Field[];
  buttonsTextContent: AuthTypeContent;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

export const AuthForm: FC<Props> = ({ fields, errors, register, buttonsTextContent }) => {
  return (
    <>
      <FillForm errors={errors} fields={fields} register={register} />
      <div className="flex gap-4">
        <Button variant={ButtonVariants.PRIMARY}>{buttonsTextContent.primaryBtnText}</Button>
        <Link
          to={buttonsTextContent.secondaryBtnLink}
          className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
          {buttonsTextContent.secondaryBtnText}
        </Link>
      </div>
    </>
  );
};
