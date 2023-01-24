import { PRIMARY_BUTTON_STYLE, SECONDARY_BUTTON_STYLE } from '@constants';
import { loginFieldsData } from '@fields/loginFieldsData';
import { CreateFields, PrimaryButton, SecondaryButton } from '@form';
import { sendLoginInfo } from '@modules/login';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(sendLoginInfo(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="md:basis-2/4 lg:basis-1/3 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
      <div>
        <h2 className="text-base-1000 text-32 font-eUkraine font-bold">Login</h2>
        <p className="text-base-500 text-lg">Login to your account</p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <CreateFields errors={errors} fields={loginFieldsData} register={register} />
        <div className="flex gap-4">
          <PrimaryButton className={PRIMARY_BUTTON_STYLE} text="Log In" />
          <SecondaryButton className={SECONDARY_BUTTON_STYLE} text="Sign Up" />
        </div>
      </form>
    </div>
  );
};
