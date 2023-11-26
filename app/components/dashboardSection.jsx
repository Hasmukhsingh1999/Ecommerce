import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { CiSaveDown1 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductsDeals from "./ProductsDeals";

const DashboardSession = () => {
  return (
    <div className="md:w-[85vw] w-full h-screen bg-[#F3F3F3] overflow-auto  ">
      <div className="md:py-[1vw] md:px-[2vw] p-[6vw] w-full flex justify-between items-center">
        <span className="px-[2vw] py-[1vw] bg-white rounded-full flex items-center gap-3 shadow-sm font-bold text-sm md:visible hidden">
          Reports{" "}
          <p>
            <TbReportSearch />
          </p>
        </span>
        <div>
          <RxHamburgerMenu />
        </div>
        <span className="px-[2vw] py-[1vw] bg-white rounded-full flex items-center gap-3 shadow-sm font-bold text-sm">
          Download Reports
          <p>
            <CiSaveDown1 />
          </p>
        </span>
      </div>

      <ProductsDeals />
    </div>
  );
};

export default DashboardSession;
