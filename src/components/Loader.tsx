import { FC, useEffect } from 'react';
import { ReactComponent as ErrorIcon } from '@svg/error.svg';
import { ReactComponent as LoadingIcon } from '@svg/loading.svg';
import { ReactComponent as SuccessIcon } from '@svg/success.svg';

interface Props {
  isSuccessView: boolean;
  isLoading: boolean;
  isShow: boolean;
  onClose: VoidFunction;
  message: string;
}

export const Loader: FC<Props> = ({ message, isSuccessView, isLoading, onClose, isShow }) => {
  const Icon = isSuccessView ? SuccessIcon : ErrorIcon;

  useEffect(() => {
    if (!isLoading && isShow) {
      setTimeout(() => onClose(), 1000);
    }
  }, [onClose, isLoading, isShow]);

  if (!isShow) {
    return null;
  }

  return (
    <div className="fixed flex items-center justify-center left-0 top-0 w-screen h-screen bg-base-100/50">
      <div className="p-4 bg-base-100 flex flex-col justify-center drop-shadow-xl rounded-lg w-1/3 h-1/3 text-center">
        {isLoading ? (
          <>
            <LoadingIcon />
            <p>Loading</p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Icon />
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};
