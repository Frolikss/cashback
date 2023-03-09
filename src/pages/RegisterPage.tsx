import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, REGISTER_FIELDS_DATA } from '@constants';
import { AuthForm, AuthPageLayout } from '@components';
import { asyncRegister } from '@modules';
import { useAppDispatch } from '@hooks';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    delete data.confirmPassword;
    dispatch(asyncRegister(data));
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
          <AuthForm
            fields={REGISTER_FIELDS_DATA}
            register={register}
            errors={errors}
            buttonsTextContent={AUTH_PAGE_CONTENT.REGISTER}
          />
        </form>
      }
    />
  );
};
