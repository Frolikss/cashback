import { ModalVariants } from '@shared/components/modal-wrapper';

import { NotificationModal } from '@entities/notification-modal';
import { UserModal } from '@entities/user-modal';

import { ReactComponent as NotificationIcon } from '@svg/notification.svg';
import { ReactComponent as UserIcon } from '@svg/userLogo.svg';

export const HEADER_MODALS = [
  {
    id: 0,
    icon: NotificationIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: NotificationModal,
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
