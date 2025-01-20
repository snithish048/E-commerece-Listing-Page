import React from "react";
import PriceTag from "./priceTag";
import ImageLoader from "./imageLoader";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-bgWood rounded-lg p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[0px_10px_22px_-9px_rgba(265,240,0,1)] flex flex-col justify-between h-full border border-solid border-gray-700 hover:border-[#ffe678]">
      <ImageLoader
        src={product.image}
        alt={product.name}
        className="w-full rounded-md mb-4"
      />
      <div>
        <h3 className="text-lg bg-[#556B2F] font-dancingScript font-bold text-[#FFD700] py-1 px-1 rounded-lg text-center m-2">
          {product.name}
        </h3>
        <PriceTag price={product.price} />
        <button
          className="mt-auto bg-[#191970] text-white py-2 px-4 rounded-lg w-full transform transition-all duration-200 hover:scale-95 focus:outline-none"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
