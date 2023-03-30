export enum InputVariants {
  PRIMARY = 'primary',
  RADIO = 'radio'
}

export const INPUT_STYLES: { [key in InputVariants]: string } = {
  [InputVariants.PRIMARY]:
    'bg-base-100 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-base-600 active:placeholder:text-base-600 outline-none hover:outline-3 focus:bg-base-100 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-accent-primary focus:outline-accent-primary hover:bg-accent-lighter hover:placeholder:text-accent-dark',
  [InputVariants.RADIO]: 'hidden peer appearance-none'
};
