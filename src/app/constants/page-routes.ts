import { AppRoutes } from '@shared/constants';

import { InviteNewUserPage, LoginPage, RegisterPage, RolesPage, UsersPage } from '@pages';

import { RouteItem } from '../types/routes.interfaces';

export const UNPROTECTED_ROUTES: RouteItem[] = [
  {
    path: AppRoutes.LOGIN,
    element: LoginPage
  },
  {
    path: AppRoutes.REGISTER,
    element: RegisterPage
  },
  {
    path: AppRoutes.ROLES,
    element: RolesPage
  },
  {
    path: AppRoutes.INVITE,
    element: InviteNewUserPage
  }
];

export const PROTECTED_ROUTES: RouteItem[] = [
  {
    path: AppRoutes.HOME,
    element: UsersPage
  }
];
