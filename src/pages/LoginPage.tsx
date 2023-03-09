import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, LOGIN_FIELDS_DATA } from '@constants';
import { AuthForm, AuthPageLayout } from '@components';
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
          <AuthForm
            fields={LOGIN_FIELDS_DATA}
            register={register}
            errors={errors}
            buttonsTextContent={AUTH_PAGE_CONTENT.LOGIN}
          />
        </form>
      }
    />
  );
};
