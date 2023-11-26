import React from 'react'

const ProductsDeals = () => {
  return (
    <div><div className="flex justify-between md:py-[1vw] md:px-[2vw] md:flex-row p-[3vw] flex-col gap-4">
    <div className="md:w-[40vw] w-full rounded-3xl gap-9 flex items-center justify-center h-[45vh] bg-slate-600">
      PERcentage
    </div>
    <div className="md:w-[40vw] w-full rounded-3xl flex items-center justify-center h-[45vh] bg-slate-600">
      STAS
    </div>
  </div>
  <div className="md:py-[1vw] md:px-[2vw]  w-full h-[100vh] bg-red-400">
    <div className="h-full w-full bg-red-950 md:rounded-3xl"></div>
  </div></div>
  )
}

export default ProductsDeals