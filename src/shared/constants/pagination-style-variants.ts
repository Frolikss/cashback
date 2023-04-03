export enum PaginationVariants {
  DEFAULT = 'default'
}

export const PAGINATION_STYLES: { [key in PaginationVariants]: string } = {
  [PaginationVariants.DEFAULT]:
    'flex gap-4 items-center [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:w-2.5 [&>*]:h-2.5 [&>*]:cursor-pointer [&>*]:p-5'
};
