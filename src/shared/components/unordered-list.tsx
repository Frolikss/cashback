import { FC } from 'react';
import { LIST_STYLES, ListVariants } from '../constants/list-style-variants';

interface Props {
  listItems: string[];
  variant?: ListVariants;
}

export const UnorderedList: FC<Props> = ({ listItems, variant = ListVariants.PRIMARY }) => {
  return (
    <ul>
      {listItems.map((listItem) => (
        <li key={listItem} className={LIST_STYLES[variant]}>
          {listItem}
        </li>
      ))}
    </ul>
  );
};
