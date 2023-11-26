import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  return (
    <div>
      <div>
        <RxHamburgerMenu size={20} />
      </div>
      <div className="absolute top-0 left-0 h-full bg-red-800 w-[100vw]">
        hu
      </div>
    </div>
  );
};

export default Hamburger;
