import React from "react";
import { menuItems } from "../../utils/menuItems";

const Sidebar = () => {
  return (
    <div className="w-[220px] flex-none  lg:px-0 px-3">
      <img
        src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
        className="my-3 h-8"
      ></img>

      <div className="py-5">
        {menuItems?.map((item, idx) => {
          return (
            <div key={idx} className="menu-item flex items-center gap-2 py-2.5">
              <img src={item?.icon}></img>
              <span className="text-gray-1k">{item?.title}</span>
            </div>
          );
        })}
      </div>

      <div className="user flex items-center gap-2 py-2.5">
        <img src="assets/images/user-dp.png" className="w-6"></img>

        <span className="text-gray-1k">Yogini</span>
      </div>

      <div className="user flex items-center gap-2 py-2.5">
        <img src="assets/images/company-avatar.svg" className="w-6"></img>

        <div className="flex flex-col items-start">
          <span className="text-gray-1k text-[14px]">Loom</span>
          <p className="text-gray-1k text-[10px]">
            Manage jobs, teams, & more →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
