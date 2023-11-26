"use client";
import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

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
    <div className="md:hidden visible">
      <div onClick={handleClick}>
        <RxHamburgerMenu size={20} />
      </div>
      <div
        ref={menuRef}
        className="absolute top-0 left-0 h-full bg-[#45474B] w-0 overflow-hidden transition-width ease-in-out duration-500"
      >
        {isOpen && (
          <RiArrowLeftDoubleLine
          size={25}
            style={{
              position: "absolute",
              top: "35px",
              right: "20px",
              zIndex: "1000",
              color:'white'
            }}
            onClick={handleClick}
          />
        )}
        hu
      </div>
    </div>
  );
};

export default Hamburger;
