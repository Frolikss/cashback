import { PRIMARY_BUTTON_STYLE, SECONDARY_BUTTON_STYLE } from '@constants';
import { loginFieldsData } from '@fields/loginFieldsData';
import { CreateFields, PrimaryButton, SecondaryButton } from '@form';
import { checkLoginInfo } from '@modules/login';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(checkLoginInfo(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <CreateFields errors={errors} fields={loginFieldsData} register={register} />
      <div className="flex gap-4">
        <PrimaryButton className={PRIMARY_BUTTON_STYLE} text="Log In" />
        <SecondaryButton className={SECONDARY_BUTTON_STYLE} text="Sign Up" />
      </div>
    </form>
  );
};
