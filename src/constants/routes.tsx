import { ROUTES } from '@shared/constants';
import { RouteItem } from '@interfaces';
import { InviteNewUserPage, LoginPage, RegisterPage, RolesPage, UsersPage } from '@pages';

export const UNPROTECTED_ROUTES: RouteItem[] = [
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />
  },
  {
    path: ROUTES.REGISTER,
    element: <RegisterPage />
  },
  {
    path: ROUTES.ROLES,
    element: <RolesPage />
  },
  {
    path: ROUTES.INVITE,
    element: <InviteNewUserPage />
  }
];

export const PROTECTED_ROUTES: RouteItem[] = [
  {
    path: ROUTES.HOME,
    element: <UsersPage />
  }
];
