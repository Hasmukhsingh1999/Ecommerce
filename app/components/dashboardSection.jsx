import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { CiSaveDown1 } from "react-icons/ci";

import ProductsDeals from "./ProductsDeals";
import Hamburger from "./Hamburger";

const DashboardSession = () => {
  return (
    <div className="md:w-[85vw] w-full h-screen bg-[#F3F3F3] overflow-auto  ">
      <div className="md:py-[1vw] md:px-[2vw] p-[6vw] w-full flex justify-between items-center">
        <span className="px-[2vw] py-[1vw] bg-white rounded-full md:flex items-center gap-3 shadow-sm font-bold text-sm  hidden">
          Reports{" "}
          <p>
            <TbReportSearch />
          </p>
        </span>
       <Hamburger/>
        <span className="md:px-[2vw] md:py-[1vw] py-[3vw] px-[5vw] bg-white rounded-full flex items-center gap-3 shadow-sm font-bold text-sm">
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
