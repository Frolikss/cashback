import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  AUTH_PAGE_CONTENT,
  BUTTON_STYLES,
  ButtonVariants,
  REGISTER_FIELDS_DATA,
  ROUTES
} from '@constants';
import { RegisterUser } from '@interfaces';
import { AuthPageLayout, Button, FillForm } from '@components';
import { setPartialRegisterUser } from '@modules';
import { useAppDispatch } from '@hooks';
import { history } from '@helpers';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    delete data.confirmPassword;
    dispatch(setPartialRegisterUser(data as RegisterUser));
    history.push(ROUTES.ROLES);
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
          <FillForm fields={REGISTER_FIELDS_DATA} register={register} errors={errors} />
          <div className="flex gap-4">
            <Link to={ROUTES.LOGIN} className={BUTTON_STYLES[ButtonVariants.SECONDARY]}>
              Log In
            </Link>
            <Button variant={ButtonVariants.PRIMARY}>Next</Button>
          </div>
        </form>
      }
    />
  );
};
