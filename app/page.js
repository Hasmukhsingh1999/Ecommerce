"use client";
import React, { useEffect, useState } from "react";
import { getDeals, getOtherDeals } from "./utils/data";

const Page = () => {
  const [deals, setDeals] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let data;
      if (selectedProduct === "iphone") {
        data = await getDeals();
      } else if (selectedProduct === "samsung") {
        data = await getOtherDeals();
      }
      setDeals(data || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedProduct]);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <div className="w-full h-full p-[4vw]">
      <label htmlFor="productDropdown">Select a product:</label>
      <select
        id="productDropdown"
        value={selectedProduct}
        onChange={handleProductChange}
      >
        <option value="">None</option>
        <option value="iphone">iPhone</option>
        <option value="samsung">samsung</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : deals.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.product_id}>
                <td>{deal.title}</td>
                <td>{deal.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No deals available for the selected product.</p>
      )}
      <button className="bg-black p-[1vw] text-white">Download</button>
    </div>
  );
};

export default Page;
