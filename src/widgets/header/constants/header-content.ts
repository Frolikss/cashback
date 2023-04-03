import { ModalVariants } from '@shared/constants';
import { UserModal } from '@entities/user-modal';
import { HeaderNotificationModal } from '@components';
import { ReactComponent as NotificationIcon } from '@svg/notification.svg';
import { ReactComponent as UserIcon } from '@svg/userLogo.svg';

export const HEADER_MODALS = [
  {
    id: 0,
    icon: NotificationIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderNotificationModal,
    variant: ModalVariants.RIGHT_SIDE,
    isHoverable: true
  },
  {
    id: 1,
    icon: UserIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: UserModal,
    variant: ModalVariants.RIGHT_SIDE,
    isHoverable: false
  }
];
