import React from "react";
import { GrHomeRounded } from "react-icons/gr";


const useFullLinks =[]
const SideBar = () => {
  return (
    <div className="w-[15vw] h-screen bg-[#191717] text-white">
      <div className="p-[2vw]">
        <h1 className="text-white font-serif text-sm">
          ECOMM <span className="text-2xl">DATA</span>
        </h1>
      </div>
      <div className=" py-[1vw] px-[2vw]">
        <h2 className="text-gray-400 opacity-20 font-mono text-xl uppercase">
          Dashboard
        </h2>
      </div>
      <hr className="w-full bg-white opacity-20" />
      <div className=" py-[1vw] px-[2vw] flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <GrHomeRounded size={15}/>
          <p className="text-xl">Home</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
