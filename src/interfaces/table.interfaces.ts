export interface TableHeader {
  isSortable: boolean;
  header: string;
  field: string;
  component?: () => JSX.Element;
  defaultValue?: string;
}
