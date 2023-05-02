export enum LabelVariants {
  ROLES = 'roles',
  CHECKBOX = 'checkbox'
}

export const LABEL_STYLES: { [key in LabelVariants]: string } = {
  [LabelVariants.ROLES]:
    'peer-checked:border-accent-primary rounded-lg w-full border-3 border-base-600 flex p-4',
  [LabelVariants.CHECKBOX]: 'p-2 h-full'
};
