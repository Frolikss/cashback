import { BUTTON_VARIANTS } from '@constants';
import { loginFieldsData } from '@fields/loginFieldsData';
import { CreateFields, Button } from '@form';
import { asyncLogin } from '@login/actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(asyncLogin(data));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <CreateFields errors={errors} fields={loginFieldsData} register={register} />
      <div className="flex gap-4">
        <Button variant={BUTTON_VARIANTS.PRIMARY} text="Log In" />
        <Button variant={BUTTON_VARIANTS.SECONDARY} text="Sign Up" />
      </div>
    </form>
  );
};
