"use client";
import React, { useEffect, useState } from "react";
import { getDeals } from "./utils/data";

const page = () => {
  const [deals, setdeals] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDeals();
        setdeals(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedProduct]);
  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };
  return (
    <div>
      <label htmlFor="productDropdown">Select a product:</label>
      <select
        id="productDropdown"
        value={selectedProduct}
        onChange={handleProductChange}
      >
        <option value="None">None</option>
        <option value="iphone">iPhone</option>
      </select>

      {deals.length > 0 ? (
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
    </div>
  );
};

export default page;
