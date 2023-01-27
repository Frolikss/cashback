import React from 'react';

import avatar from '@assets/png/avatarSmall.png';
import arrow from '@assets/svg/arrow.svg';
import close from '@assets/svg/close.svg';
import edit from '@assets/svg/edit.svg';
import grid from '@assets/svg/gridView.svg';
import { Header } from '@components';

export const ListViewPage = () => {
  return (
    <>
      <div className="bg-base-200 py-8 flex flex-wrap gap-10 justify-between font-eUkraine text-lg">
        <Header />
        <div className="container self-center mx-auto bg-base-100 rounded-lg p-6">
          <table className="w-full">
            <thead>
              <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
                <th className="">
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    Name
                    <img src={arrow} alt="arrow" />
                  </button>
                </th>
                <th>
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    Status
                    <img src={arrow} alt="arrow" />
                  </button>
                </th>
                <th>
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    ID
                    <img src={arrow} alt="arrow" />
                  </button>
                </th>
                <th>
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    Phone
                    <img src={arrow} alt="arrow" />
                  </button>
                </th>
                <th>
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    E-mail
                    <img src={arrow} alt="arrow" />
                  </button>
                </th>
                <th className="font-normal text-lg text-base-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
                  </button>
                </td>
              </tr>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
                  </button>
                </td>
              </tr>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
                  </button>
                </td>
              </tr>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
                  </button>
                </td>
              </tr>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
                  </button>
                </td>
              </tr>
              <tr className="[&>*]:py-6 border-b border-base-400">
                <td className="flex items-center gap-6 font-bold">
                  <img className="w-10 h-10" src={avatar} alt="avatar" />
                  Avery Ross
                </td>
                <td>Admin</td>
                <td>#43244124</td>
                <td>88005553535</td>
                <td>samplemail@gmail.com</td>
                <td className="text-right">
                  <button>
                    <img src={edit} alt="edit" />
                  </button>
                  <button>
                    <img src={close} alt="delete" />
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
              <img src={grid} alt="grid" />
            </button>
          </div>
          <div>
            <button className="bg-accent-primary px-6 py-2 text-base-100 rounded-lg text-xl font-medium">
              Show All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
