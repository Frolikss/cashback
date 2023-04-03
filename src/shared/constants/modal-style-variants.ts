export enum ModalVariants {
  RIGHT_SIDE = 'right',
  LEFT_SIDE = 'left'
}

export const MODAL_STYLES: { [key in ModalVariants]: string } = {
  [ModalVariants.RIGHT_SIDE]: 'absolute right-0 items-center',
  [ModalVariants.LEFT_SIDE]: 'absolute left-0'
};
