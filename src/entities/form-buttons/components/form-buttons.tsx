import { FC } from 'react';

import { Button } from '@shared/components/button';

import { FormButton, FormButtonAction } from '../types/button.interfaces';

interface Props {
  pageButtons: FormButton[];
  buttonsProperties?: FormButtonAction[];
}

export const FormButtons: FC<Props> = ({ pageButtons, buttonsProperties }) => {
  return (
    <div className="flex gap-4 justify-between">
      {pageButtons.map((button) => {
        const buttonProperties = buttonsProperties?.find(
          (buttonProperties) => buttonProperties.id === button.id
        );
        return (
          <Button
            key={button.id}
            type={button.type}
            variant={button.variant}
            customStyle={buttonProperties?.customStyle}
            onClick={buttonProperties?.action}
            {...buttonProperties?.props}
          >
            {button.children}
          </Button>
        );
      })}
    </div>
  );
};
