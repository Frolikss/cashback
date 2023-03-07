import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BUTTON_STYLES, ButtonVariants } from '@constants';
import { AuthTypeContent, Field } from '@interfaces';
import { Button, FillForm } from '@components';

interface Props {
  fields: Field[];
  btnsTxtContent: AuthTypeContent;
  errors: FieldErrors;
  register: UseFormRegister<Field>;
}

export const AuthForm: FC<Props> = ({ fields, errors, register, btnsTxtContent }) => {
  return (
    <>
      <FillForm errors={errors} fields={fields} register={register} />
      <div className="flex gap-4">
        <Button variant={ButtonVariants.PRIMARY}>{btnsTxtContent.primaryBtnText}</Button>
        <Link
          to={btnsTxtContent.secondaryBtnLink}
          className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
          {btnsTxtContent.secondaryBtnText}
        </Link>
      </div>
    </>
  );
};
