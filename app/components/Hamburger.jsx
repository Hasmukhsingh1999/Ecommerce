"use client";
import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
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

const Hamburger = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        width: 0,
        duration: 0.5,
        ease: "power1",
      });
    } else {
      gsap.to(menuRef.current, {
        width: "100vw",
        duration: 0.5,
        ease: "power1",
      });
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden visible z-50">
      <div onClick={handleClick}>
        <RxHamburgerMenu size={20} />
      </div>
      <div
        ref={menuRef}
        className="absolute top-0 left-0 h-full bg-[#45474B] w-0 overflow-hidden transition-width ease-in-out "
      >
        {isOpen && (
          <RiArrowLeftDoubleLine
            size={25}
            style={{
              position: "absolute",
              top: "35px",
              right: "20px",
              zIndex: "1000",
              color: "white",
            }}
            onClick={handleClick}
          />
        )}
        <div className="flex items-center justify-center h-full w-full flex-col">
          <div className="  flex flex-col gap-10">
            {useFullLinks.map((item, id) => (
              <div
                className="flex items-center gap-4 text-white text-3xl cursor-pointer"
                key={id}
              >
                {item.imageCompo}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
