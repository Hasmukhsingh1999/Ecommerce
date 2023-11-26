import React from "react";
import SideBar from "./sidebar";
import DashboardSession from "./dashboardSection";


const Home = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div>
        <SideBar />
      </div>
      <div className="">
        <DashboardSession />
      </div>
     
    </div>
  );
};

export default Home;
