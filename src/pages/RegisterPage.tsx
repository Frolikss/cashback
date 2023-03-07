import { FieldValues, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, REGISTER_FIELDS_DATA } from '@constants';
import { AuthForm, AuthPageWrapper } from '@components';

export const RegisterPage = () => {
  //TODO: toolkit
  const onSubmit = (data: FieldValues) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <AuthPageWrapper
      textContent={AUTH_PAGE_CONTENT.REGISTER}
      form={
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <AuthForm fields={REGISTER_FIELDS_DATA} register={register} errors={errors} />
        </form>
      }
    />
  );
};
