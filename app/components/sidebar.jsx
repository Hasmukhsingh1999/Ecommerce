import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const useFullLinks = [
  { id: 1, imageCompo: <GrHomeRounded />, text: "Overview" },
  { id: 2, imageCompo: <FaRegUser />, text: "Memebers" },
  { id: 3, imageCompo: <ImStatsBars />, text: "Stats" },
  { id: 4, imageCompo: <IoFileTrayFullOutline />, text: "File Manager" },
];

const userProfile = [
  { id: 1, imageCompo: <LuUserCircle2 />, text: "Profile" },
  { id: 2, imageCompo: <IoSettingsOutline />, text: "Settings" },
];

const SideBar = () => {
  return (
    <div className="w-[15vw] h-screen bg-[#45474B] text-white flex-col justify-between md:flex hidden">
      <div>
        <div className="p-[2vw]">
          <h1 className="text-white font-serif text-sm ">
            ECOMM <span className="text-2xl">DATA</span>
          </h1>
        </div>
        <div className=" py-[1vw] px-[2vw]">
          <h2 className="text-gray-400 opacity-50 font-mono text-xl uppercase cursor-pointer hover:text-white hover:opacity-100 ">
            Dashboard
          </h2>
        </div>
        <hr className="w-full bg-white opacity-20" />
        <div className=" py-[1vw] px-[2vw] flex flex-col gap-6">
          {useFullLinks.map((item, id) => (
            <div
              className="flex items-center gap-5 opacity-50 hover:text-white hover:opacity-100 cursor-pointer"
              key={id}
            >
              {item.imageCompo}
              {item.text}
            </div>
          ))}
        </div>
        <hr className="w-full bg-white opacity-20" />
        <div className=" py-[1vw] px-[2vw]">
          <h2 className="text-gray-400 opacity-50 font-mono text-xl uppercase cursor-pointer hover:text-white hover:opacity-100 ">
            Preference
          </h2>
        </div>
        <div className=" py-[1vw] px-[2vw] flex flex-col gap-6">
          {userProfile.map((item, id) => (
            <div
              className="flex items-center gap-5 opacity-50 hover:text-white hover:opacity-100 cursor-pointer"
              key={id}
            >
              {item.imageCompo}
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" py-[1vw] px-[2vw] flex  gap-6 items-center">
          Logout
          <IoIosLogOut />
        </div>
      </div>
      
    </div>
  );
};

export default SideBar;
