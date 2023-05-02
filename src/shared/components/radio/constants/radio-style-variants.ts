export enum RadioVariants {
  PRIMARY = 'primary'
}

export const RADIO_STYLES: { [key in RadioVariants]: string } = {
  [RadioVariants.PRIMARY]: 'peer checked:bg-base-1000 appearance-none'
};
