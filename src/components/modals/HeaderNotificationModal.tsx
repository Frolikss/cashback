import { FC } from 'react';

export const HeaderNotificationModal: FC = () => {
  return (
    <>
      <h2 className="font-bold text-2xl self-start">Notifications</h2>
      <div>
        <div className="flex items-center gap-4">
          <span className="w-4.5 h-4.5 shrink-0 bg-accent-primary rounded-full" />
          <div>
            <p className="font-base">
              <b>Avery Ross</b> Left a comment on <b>smh</b>
            </p>
            <span className="text-base-600">4 minutes ago</span>
          </div>
        </div>
      </div>
    </>
  );
};
