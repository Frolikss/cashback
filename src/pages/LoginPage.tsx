import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AUTH_PAGE_CONTENT, LOGIN_FIELDS_DATA, ROUTES } from '@constants';
import { BUTTON_STYLES, Button, ButtonVariants } from '@shared/button';
import { FormFields } from '@shared/form-setters';
import { AuthPageLayout } from '@components';
import { asyncLogin } from '@modules';
import { useAppDispatch } from '@hooks';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  return (
    <AuthPageLayout
      textContent={AUTH_PAGE_CONTENT.LOGIN}
      form={
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <FormFields fields={LOGIN_FIELDS_DATA} register={register} errors={errors} />
          <div className="flex gap-4 justify-between">
            <Button variant={ButtonVariants.PRIMARY}>Log In</Button>
            <Link className={BUTTON_STYLES[ButtonVariants.SECONDARY]} to={ROUTES.REGISTER}>
              Sign Up
            </Link>
          </div>
        </form>
      }
    />
  );
};
