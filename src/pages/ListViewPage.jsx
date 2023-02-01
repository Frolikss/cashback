import React, { useEffect } from 'react';

import avatar from '@assets/png/avatarSmall.png';
import { ReactComponent as ArrowIcon } from '@assets/svg/arrow.svg';
import { ReactComponent as CloseIcon } from '@assets/svg/close.svg';
import { ReactComponent as EditIcon } from '@assets/svg/edit.svg';
import { ReactComponent as GridIcon } from '@assets/svg/gridView.svg';
import { Header } from '@components';
import { asyncGetUsers } from '@login/actions';
import { useDispatch } from 'react-redux';

export const ListViewPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  // const { users } = useSelector((state) => state.auth);
  // console.log(users);
  return (
    <div className="min-h-screen bg-base-200 p-4 flex flex-wrap gap-10 justify-between font-eUkraine text-lg">
      <Header />
      <div className="container mx-auto bg-base-100 rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
              <th className="">
                <button className="flex items-center gap-1 font-normal text-base-600">
                  Name
                  <ArrowIcon />
                </button>
              </th>
              <th>
                <button className="flex items-center gap-1 font-normal text-base-600">
                  Status
                  <ArrowIcon />
                </button>
              </th>
              <th>
                <button className="flex items-center gap-1 font-normal text-base-600">
                  ID
                  <ArrowIcon />
                </button>
              </th>
              <th>
                <button className="flex items-center gap-1 font-normal text-base-600">
                  Phone
                  <ArrowIcon />
                </button>
              </th>
              <th>
                <button className="flex items-center gap-1 font-normal text-base-600">
                  E-mail
                  <ArrowIcon />
                </button>
              </th>
              <th className="font-normal text-lg text-base-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="[&>*]:py-6 border-b border-base-400">
              <td className="flex items-center gap-6 font-bold">
                <img src={avatar} alt="avatar" />
                Avery Ross
              </td>
              <td>Admin</td>
              <td>#43244124</td>
              <td>88005553535</td>
              <td>samplemail@gmail.com</td>
              <td className="text-right">
                <button>
                  <EditIcon />
                </button>
                <button>
                  <CloseIcon />
                </button>
              </td>
            </tr>
            <tr className="[&>*]:py-6 border-b border-base-400">
              <td className="flex items-center gap-6 font-bold">
                <img src={avatar} alt="avatar" />
                Avery Ross
              </td>
              <td>Admin</td>
              <td>#43244124</td>
              <td>88005553535</td>
              <td>samplemail@gmail.com</td>
              <td className="text-right">
                <button>
                  <EditIcon />
                </button>
                <button>
                  <CloseIcon />
                </button>
              </td>
            </tr>
            <tr className="[&>*]:py-6 border-b border-base-400">
              <td className="flex items-center gap-6 font-bold">
                <img src={avatar} alt="avatar" />
                Avery Ross
              </td>
              <td>Admin</td>
              <td>#43244124</td>
              <td>88005553535</td>
              <td>samplemail@gmail.com</td>
              <td className="text-right">
                <button>
                  <EditIcon />
                </button>
                <button>
                  <CloseIcon />
                </button>
              </td>
            </tr>
            <tr className="[&>*]:py-6 border-b border-base-400">
              <td className="flex items-center gap-6 font-bold">
                <img src={avatar} alt="avatar" />
                Avery Ross
              </td>
              <td>Admin</td>
              <td>#43244124</td>
              <td>88005553535</td>
              <td>samplemail@gmail.com</td>
              <td className="text-right">
                <button>
                  <EditIcon />
                </button>
                <button>
                  <CloseIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container flex justify-between items-center mx-auto bg-base-100 rounded-lg px-6 py-4">
        <div className="flex items-center gap-2.5">
          <select>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <button className="bg-accent-primary rounded-lg p-1">
            <GridIcon />
          </button>
        </div>
        <div>
          <button className="bg-accent-primary px-6 py-2 text-base-100 rounded-lg text-xl font-medium">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};
