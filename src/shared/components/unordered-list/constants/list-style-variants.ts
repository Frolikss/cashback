export enum ListVariants {
  PRIMARY = 'primary'
}

export const LIST_STYLES: { [key in ListVariants]: string } = {
  [ListVariants.PRIMARY]: 'border-b-1 border-b-base-700 p-2'
};
