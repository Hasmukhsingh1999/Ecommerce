"use client"
// import React, { useEffect, useState } from "react";
// import { getDeals, getOtherDeals, sonyDeals } from "./utils/data";
// import * as XLSX from "xlsx";
// import { Doughnut } from "react-chartjs-2";
// import 'chart.js/auto';


// const Page = () => {
//   const productList = ["iphone", "sony", "samsung"];
//   const [deals, setDeals] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(productList[0]);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       let data;
//       if (selectedProduct === "iphone") {
//         data = await getDeals();
//       }
//       if (selectedProduct === "samsung") {
//         data = await getOtherDeals();
//       }
//       if (selectedProduct === "sony") {
//         data = await sonyDeals();
//       }
//       setDeals(data || []);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [selectedProduct]);

//   const handleProductChange = (e) => {
//     setSelectedProduct(e.target.value);
//   };

//   const downloadExcel = () => {
//     const customData = deals.map((deal) => ({
//       Title: deal.title,
//       Price: deal.price,
//     }));

//     const sheet = XLSX.utils.json_to_sheet(customData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, sheet, "Deals");
//     XLSX.writeFile(workbook, "deals.xlsx");
//   };

 
//   const chartData = {
//     labels: deals.map((deal) => deal.title),
//     datasets: [
//       {
//         data: deals.map((deal) => deal.price),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//           "rgba(255, 206, 86, 0.6)",
//           // Add more colors as needed
//         ],
//         hoverBackgroundColor: [
//           "rgba(255, 99, 132, 0.8)",
//           "rgba(54, 162, 235, 0.8)",
//           "rgba(255, 206, 86, 0.8)",
//           // Add more colors as needed
//         ],
//       },
//     ],
//   };

//   const chartOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="w-full h-full p-[4vw]">
//       <h2 className="text-center font-bold text-xl">Amazon Data</h2>
//       <label htmlFor="productDropdown">Select a product:</label>
//       <select
//         id="productDropdown"
//         value={selectedProduct}
//         onChange={handleProductChange}
//       >
//         <option value="">None</option>
//         <option value="iphone">iPhone</option>
//         <option value="samsung">Samsung</option>
//         <option value="sony">Sony</option>
//       </select>

//       {loading ? (
//         <p>Loading...</p>
//       ) : deals.length > 0 ? (
//         <div className="mt-4">
//           <div className="flex flex-wrap">
//             {deals.map((deal) => (
//               <div key={deal.product_id} className="w-1/3 p-2">
//                 <div className="border p-4">
//                   <p>
//                     <span className="font-semibold">Name :</span> {deal.title}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Price :</span>{" "}
//                     <span className="font-bold">{deal.price}</span>{" "}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full text-center">
//             <button
//               className="bg-black p-[1vw] text-white mt-4 text-center"
//               onClick={downloadExcel}
//             >
//               Download
//             </button>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-center font-bold text-lg">Price Analysis</h3>
//             {/* Use Doughnut component instead of Bar */}
//           <div className="h-[100vh] w-full">
//           <Doughnut
//               data={chartData}
//               width={400}
//               height={300}
//               options={chartOptions}
//             />
//           </div>
//           </div>
//         </div>
//       ) : (
//         <p>No deals available for the selected product.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

import React from 'react'

import Home from './components/home'

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page