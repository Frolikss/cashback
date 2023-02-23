import { FC, SVGProps } from 'react';
import { MODAL_VARIANTS } from '@constants';
import { HeaderNotificationModal, HeaderUserModal } from '@components';
import { ReactComponent as NotificationIcon } from '@svg/notification.svg';
import { ReactComponent as UserIcon } from '@svg/userLogo.svg';

interface HeaderModal {
  icon: FC<SVGProps<SVGSVGElement>>;
  modal: FC;
  iconStyle: string;
  isHoverable: boolean;
}

export const HEADER_MODALS = [
  {
    icon: NotificationIcon,
    iconStyle: 'w-10 h-10 pointer-events-none',
    modal: HeaderNotificationModal,
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
