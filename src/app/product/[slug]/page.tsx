import ProductAction from "@/components/product/ProductAction";
import React from "react";

const ProductPage = () => {
  return (
    <div className="max-w-[1230px] grid grid-cols-[40%_60%] gap-6 mx-auto px-4 py-6 flex">
      <ProductAction />
      <div>haha</div>
    </div>
  );
};

export default ProductPage;
