import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AUTH_PAGE_CONTENT, REGISTER_FIELDS_DATA } from '@constants';
import { Button, FormFields } from '@shared/components';
import { AppRoutes, BUTTON_STYLES, ButtonVariants } from '@shared/constants';
import { RegisteredUser } from '@interfaces';
import { AuthPageLayout } from '@components';
import { setRegisteredUserAction } from '@modules';
import { useAppDispatch } from '@hooks';
import { history } from '@helpers';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    delete data.confirmPassword;
    dispatch(setRegisteredUserAction(data as RegisteredUser));
    history.push(AppRoutes.ROLES);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  return (
    <AuthPageLayout
      textContent={AUTH_PAGE_CONTENT.REGISTER}
      form={
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <FormFields fields={REGISTER_FIELDS_DATA} register={register} errors={errors} />
          <div className="flex gap-4">
            <Link to={AppRoutes.LOGIN} className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
              Log In
            </Link>
            <Button variant={ButtonVariants.PRIMARY}>Next</Button>
          </div>
        </form>
      }
    />
  );
};
