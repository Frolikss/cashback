import { SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, REGISTER_FIELDS_DATA } from '@constants';
import { Field } from '@interfaces';
import { AuthForm, AuthPageLayout } from '@components';

export const RegisterPage = () => {
  //TODO: toolkit
  const onSubmit: SubmitHandler<Field> = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Field>();

  return (
    <AuthPageLayout
      textContent={AUTH_PAGE_CONTENT.REGISTER}
      form={
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <AuthForm
            fields={REGISTER_FIELDS_DATA}
            register={register}
            errors={errors}
            btnsTxtContent={AUTH_PAGE_CONTENT.REGISTER}
          />
        </form>
      }
    />
  );
};
