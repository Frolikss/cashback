import { RolesForm } from '@features/roles-form';
import { ROLES_LAYOUT_CONTENT } from '../constants/layout-content';

export const RoleChoice = () => {
  return (
    <div className="parent w-full flex md:items-center justify-center bg-login flex-col-reverse md:flex-row">
      <div className="basis-3/4 bg-base-100 h-screen bg-opacity-70 flex flex-col justify-center gap-10 px-8">
        <div className="text-center">
          <h2 className="text-base-1000 text-32 font-eUkraine font-bold">
            {ROLES_LAYOUT_CONTENT.header}
          </h2>
          <p className="text-base-500 text-lg">{ROLES_LAYOUT_CONTENT.subheader}</p>
        </div>
        <RolesForm />
      </div>
    </div>
  );
};
