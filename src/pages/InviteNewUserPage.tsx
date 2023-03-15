import cn from 'classnames';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  AUTH_PAGE_CONTENT,
  ButtonVariants,
  FieldNames,
  INVITE_FIELDS_DATA,
  INVITE_LABEL_CONTENT,
  LabelVariants
} from '@constants';
import { Button, FillForm } from '@components';
import { history } from '@helpers';

export const InviteNewUserPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>();

  const isAgreedToConditions: boolean = watch(FieldNames.CONFIRM_INVITE_RULES);

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className="parent w-full flex md:items-center justify-center bg-login flex-col-reverse md:flex-row">
      <div className="basis-3/4 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div className="text-center">
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">
            {AUTH_PAGE_CONTENT.INVITE.header}
          </h2>
          <p className="text-base-500 text-lg">{AUTH_PAGE_CONTENT.INVITE.subheader}</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FillForm
            fields={INVITE_FIELDS_DATA}
            errors={errors}
            register={register}
            labelContent={INVITE_LABEL_CONTENT}
            labelVariant={LabelVariants.CHECKBOX}
          />
          <div className="flex gap-4 justify-between">
            <div className="basis-1/3 [&>*]:h-full [&>*]:w-1/2">
              <Button variant={ButtonVariants.SECONDARY} onClick={history.back}>
                Back
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant={ButtonVariants.SECONDARY}>Skip</Button>
              <div className={cn({ 'pointer-events-none opacity-50': !isAgreedToConditions })}>
                <Button variant={ButtonVariants.PRIMARY}>Submit</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
