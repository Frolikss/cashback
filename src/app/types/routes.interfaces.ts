import { FC, ReactElement, ReactNode } from 'react';

export interface RouteItem {
  path: string;
  element: FC;
}
