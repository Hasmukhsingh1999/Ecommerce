
import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { CiSaveDown1 } from "react-icons/ci";

import ProductsDeals from "./ProductsDeals";
import Hamburger from "./Hamburger";



import "bootstrap/dist/css/bootstrap.min.css"; 



const DashboardSession = () => {
 
  return (
    <div className="md:w-[85vw] w-full h-screen bg-[#EEEEEE] overflow-auto  ">
      <div className="md:py-[1vw] md:px-[2vw] p-[6vw] w-full flex justify-between items-center">
        <span className="px-[2vw] py-[1vw] bg-white rounded-full md:flex md:items-center gap-3 shadow-sm font-bold text-sm  hidden">
          Reports{" "}
          
            <TbReportSearch />
        
        </span>
        <Hamburger />
        <span className="md:px-[2vw] md:py-[1vw] py-[3vw] px-[5vw] bg-white rounded-full flex  gap-3 shadow-sm font-bold text-sm items-center" >
          Download Reports
          <CiSaveDown1 />
        </span>
      </div>

      <ProductsDeals />
    </div>
  );
};

export default DashboardSession;
