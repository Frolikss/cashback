import { ReactComponent as NotificationIcon } from '@svg/notification.svg';
import { ReactComponent as UserIcon } from '@svg/userLogo.svg';

import { MODAL_VARIANTS } from './index';
import { HeaderNotifModal } from '../components/modals/HeaderNotifModal';
import { HeaderUserModal } from '../components/modals/HeaderUserModal';

export const HEADER_MODALS = [
  {
    icon: NotificationIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderNotifModal,
    variant: `${MODAL_VARIANTS.RIGHT_SIDE} items-baseline`,
    isHoverable: true
  },
  {
    icon: UserIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderUserModal,
    variant: MODAL_VARIANTS.RIGHT_SIDE,
    isHoverable: false
  }
];
