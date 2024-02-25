import IconButton from "@/components/common/IconButton";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
const JobInfo = () => {
  const stats = [
    { text: "Candidates", count: 78 },
    { text: "Applied w/ Peerlist", count: 68 },
    { text: "Views", count: 2872 },
  ];
  const menu = [
    { icon: "assets/icons/edit.svg" },
    { icon: "assets/icons/share.svg" },
    { icon: "assets/icons/link.svg" },
    { icon: "assets/icons/menu.svg" },
  ];
  return (
    <div className="w-full py-9 px-6 bg-gray-00">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src="assets/images/peerlist-logo.svg"
            className="p-2 border-[1px] border-solid border-gray-200 rounded-2xl"
          ></img>

          <div className="flex flex-col">
            <div className="flex items-center text-[18px] font-semibold">
              Software Engineer, Front End{" "}
              <FaChevronDown size={10} className="ml-2" />
            </div>
            <p className="text-[14px] text-gray-1k">
              at Peerlist • Full time • Remote (United States, Canada)
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-[10px]">
          {menu?.map((m, idx) => {
            return <IconButton icon={m?.icon}></IconButton>;
          })}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="stats flex gap-4 pl-[78px]">
          {stats?.map((s, idx) => {
            return (
              <span className="text-[12px] font-semibold flex gap-2">
                {s?.count}
                <p className="font-normal">{s?.text}</p>
              </span>
            );
          })}
        </div>

        <div className="flex text-[10px] items-center">
          Posted <span className="font-semibold mr-1 ml-[2px]">1 day ago</span>
          by <img src="assets/images/user2.png" className="w-4 h-4" />{" "}
          <span className="font-semibold"> Akash Bhadange</span>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
