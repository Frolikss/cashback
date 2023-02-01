import { MODAL_VARIANTS } from './index';
import { ReactComponent as NotificationIcon } from '../assets/svg/notification.svg';
import { ReactComponent as UserIcon } from '../assets/svg/userLogo.svg';
import { HeaderNotifModal } from '../components/modals/HeaderNotifModal';
import { HeaderUserModal } from '../components/modals/HeaderUserModal';

export const HEADER_MODALS = [
  {
    icon: NotificationIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderNotifModal,
    variant: MODAL_VARIANTS.RIGHT_SIDE + ' items-baseline'
  },
  {
    icon: UserIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderUserModal,
    variant: MODAL_VARIANTS.RIGHT_SIDE
  }
];
