"use client";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";
// import { ResponsiveBar } from "@nivo/bar";
import { getDeals, getOtherDeals, sonyDeals } from "../utils/data";
import { SiAdp } from "react-icons/si";
import { ResponsivePie } from "@nivo/pie";
import { HiDotsHorizontal } from "react-icons/hi";

import { MutatingDots } from "react-loader-spinner";
const ProductsDeals = () => {
  const productList = ["ipone", "sony", "samsung"];
  const [deals, setDeals] = useState([]);
  const [selectedProducts, setSelectedProduct] = useState(productList[0]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let data;
      if (selectedProducts === "iphone") {
        data = await getDeals();
      }
      if (selectedProducts === "samsung") {
        data = await getOtherDeals();
      }
      if (selectedProducts === "sony") {
        data = await sonyDeals();
      }
      setDeals(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedProducts]);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };
  const chartData = deals.map((deal) => ({
    id: deal.title,
    value: deal.price,
  }));
  const handleClick = () => {
    const customData = deals.map((deal) => ({
      Title: deal.title,
      Price: deal.price,
    }));
    const sheet = XLSX.utils.json_to_sheet(customData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Deals");
    XLSX.writeFile(workbook, "deal.xlsx");
  };
  return (
    <div className="">
      <div className="flex justify-between md:py-[1vw] md:px-[2vw] md:flex-row p-[3vw] flex-col gap-4">
        <div className="md:w-[40vw] w-full rounded-3xl gap-9  h-[45vh] bg-[#739072]">
          {deals.length === 0 ? (
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-center w-full px-[3vw] py-[2vw]">
                <h1 className="text-6xl text-white">
                  78 <span className="opacity-50 ">%</span>
                </h1>
                <SiAdp size={70} />
              </div>
              <div className="px-[3vw] py-[2vw] w-full flex justify-between items-center">
                <h4 className="text-3xl font-semibold">Deals Tracker</h4>
                <h4 className="text-sm">1/10</h4>
              </div>
            </div>
          ) : (
            <ResponsivePie
              data={chartData}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              innerRadius={0.5} // Adjusted inner radius for a donut chart, set to 0 for a regular pie chart
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: "set3" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: "color" }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
            />
          )}
        </div>
        <div className="md:w-[40vw] w-full rounded-3xl flex items-center justify-center h-[45vh] bg-white">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="flex justify-between items-center w-full md:px-[3vw] md:py-[2vw] py-[5vw] px-[5vw]">
              <h1 className="text-3xl text-black">
                ALL<span className="opacity-50 ">Conversion</span>
              </h1>
              <HiDotsHorizontal size={30} />
            </div>
            <div className="px-[3vw] py-[2vw] flex flex-col justify-between">
              <p className="text-5xl font-bold">Goal Compeletion</p>
              <h4 className="text-sm px-[2vw] py-[.3vw] rounded-full bg-[#F1EAFF] text-end">
                150%
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-[1vw] md:px-[2vw]  w-full h-[100vh] overflow-hidden">
        <div className="h-full w-full bg-white shadow-sm md:rounded-3xl overflow-auto">
          <div className="w-full flex justify-between  items-center md:py-[2vw] md:px-[2vw] sticky top-0 left-0  bg-white border-gray-300 border-b py-[5vw] px-[4vw]">
            <span className="md:text-2xl text-normal font-bold font-sans">
              Amazon Reports
            </span>
            <span>
              <DropDown
                handleProductChange={handleProductChange}
                selectedProducts={selectedProducts}
              />
            </span>
          </div>
          <div className="md:py-[1vw] md:px-[2vw] h-full w-full py-[5vw] px-[4vw]">
            {loading ? (
              <div className="flex items-center justify-center h-full ">
                <MutatingDots
                  height="100"
                  width="100"
                  color="#4fa94d"
                  secondaryColor="#4fa94d"
                  radius="12.5"
                  ariaLabel="mutating-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : deals.length > 0 ? (
              <Table striped bordered hover responsive width={"100%"}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((deal) => (
                    <tr key={deal.id}>
                      <td>{deal.title}</td>
                      <td>{deal.price}</td>
                    </tr>
                  ))}
                </tbody>
                <div className="mt-3 text-center p-2 w-[100%]  flex items-center justify-center">
                  <button
                    className="md:px-[2vw] md:py-[1vw] py-[3vw] px-[5vw] bg-white rounded-full flex  gap-3 shadow-sm font-bold text-sm items-center text-center cursor-pointer"
                    onClick={handleClick} 
                  >
                    Download Reports
                  </button>
                </div>
              </Table>
            ) : (
              <div className="flex items-center  justify-center h-full font-semibold">
                Select from the Dropdown to check Deals.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDeals;
