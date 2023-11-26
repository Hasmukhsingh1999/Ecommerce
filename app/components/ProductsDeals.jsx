"use client";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";

import { getDeals, getOtherDeals, sonyDeals } from "../utils/data";

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
        <div className="md:w-[40vw] w-full rounded-3xl gap-9 flex items-center justify-center h-[45vh] bg-slate-600">
          PERcentage
        </div>
        <div className="md:w-[40vw] w-full rounded-3xl flex items-center justify-center h-[45vh] bg-slate-600">
          STAS
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
                loading...
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
                <div className="mt-3 text-center p-2">
                  <button
                    className="md:px-[2vw] md:py-[1vw] py-[3vw] px-[5vw] bg-white rounded-full flex  gap-3 shadow-sm font-bold text-sm items-center text-center"
                    onClick={handleClick}
                  >
                    Download Reports
                  </button>
                </div>
              </Table>
            ) : (
              <div className="flex items-center justify-center h-full font-semibold">
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
