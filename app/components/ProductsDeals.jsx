"use client";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"; // Importing the Table component from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importing the Bootstrap CSS

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
      <div className="md:py-[1vw] md:px-[2vw]  w-full h-[100vh]">
        <div className="h-full w-full bg-white shadow-sm md:rounded-3xl overflow-auto">
          <div className="w-full flex justify-between md:py-[2vw] md:px-[2vw] sticky top-0 left-0  bg-white border-gray-300 border-b">
            <span className="text-2xl font-bold font-sans">Amazon Reports</span>
            <span>
              <DropDown handleProductChange={handleProductChange} selectedProducts={selectedProducts} />
            </span>
          </div>
          <div className="md:py-[1vw] md:px-[2vw] "> 
            {loading ? (
              <p>loading...</p>
            ) : deals.length > 0 ? (
              <Table striped bordered hover responsive>
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
              </Table>
            ) : (
              <div className="flex items-center justify-center font-semibold">Select from the Dropdown to check Deals.</div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductsDeals;
