import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_PAGE_CONTENT, ButtonVariants, ROLES_FIELDS_DATA } from '@constants';
import { Button, FillForm } from '@components';
import { asyncRegister, selectRegisteredUser } from '@modules';
import { useAppDispatch, useAppSelector } from '@hooks';
import { history } from '@helpers';

export const RolesPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectRegisteredUser);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(asyncRegister({ ...data, ...user }));
    //TODO: history.push('/last-step')
  };

  return (
    <div className="parent w-full flex md:items-center justify-center bg-login flex-col-reverse md:flex-row">
      <div className="basis-3/4 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div className="text-center">
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">
            {AUTH_PAGE_CONTENT.ROLES.header}
          </h2>
          <p className="text-base-500 text-lg">{AUTH_PAGE_CONTENT.ROLES.subheader}</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FillForm fields={ROLES_FIELDS_DATA} errors={errors} register={register} />
          <div className="flex self-end gap-4">
            <Button variant={ButtonVariants.SECONDARY} onClick={() => history.back()}>
              Back
            </Button>
            <Button variant={ButtonVariants.PRIMARY}>Next</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
