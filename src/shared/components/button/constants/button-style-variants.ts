export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  UTILITY = 'utility'
}

export const BUTTON_STYLES: { [key in ButtonVariants]: string } = {
  [ButtonVariants.PRIMARY]:
    'text-base-100 bg-accent-primary text-center rounded-xl flex-1 font-eUkraine font-medium text-lg p-3 leading-5 transition duration-300 hover:bg-accent-dark',
  [ButtonVariants.SECONDARY]:
    'font-eUkraine px-3 font-medium rounded-xl flex items-center justify-center text-accent-primary border-3 flex-1 border-accent-primary hover:border-accent-dark',
  [ButtonVariants.TERTIARY]:
    'w-full text-red-regular font-medium flex-1 transition duration-300 hover:text-red-darker',
  [ButtonVariants.UTILITY]:
    'hover:bg-base-200/70 p-0.5 transition-all duration-300 bg-base-100 rounded-full flex items-center justify-center'
};
