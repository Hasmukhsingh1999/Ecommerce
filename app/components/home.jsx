import React from "react";
import SideBar from "./sidebar";
import DashboardSession from "./dashboardSection";

const Home = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        <DashboardSession />
      </div>
    </div>
  );
};

export default Home;
