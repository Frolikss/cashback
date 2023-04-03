import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AUTH_PAGE_CONTENT, LOGIN_FIELDS_DATA } from '@constants';
import { Button, FormFields } from '@shared/components';
import { AppRoutes, BUTTON_STYLES, ButtonVariants } from '@shared/constants';
import { useAppDispatch } from '@shared/lib';
import { AuthPageLayout } from '@widgets/auth-page-layout';
import { asyncLogin } from '@modules';

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
            <Link className={BUTTON_STYLES[ButtonVariants.SECONDARY]} to={AppRoutes.REGISTER}>
              Sign Up
            </Link>
          </div>
        </form>
      }
    />
  );
};
