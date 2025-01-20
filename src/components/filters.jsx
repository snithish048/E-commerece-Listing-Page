import React, { useState } from "react";
import PriceTag from "./priceTag";

const Filters = ({
  sortOption,
  priceFilter,
  onSortChange,
  onPriceChange,
  onCategoryChange,
}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName) => ({
    backgroundColor: activeButton === buttonName ? "#FFD700" : "#556B2F",
    color: activeButton === buttonName ? "#556B2F" : "#FFD700",
    border:
      activeButton === buttonName ? "1px solid #556B2F" : "1px solid #FFD700",
    borderRadius: "5px",
    padding: "4px 6px",
    cursor: "pointer",
    fontFamily: "Dancing Script",
    fontWeight: "bold",
  });

  return (
    <div className=" xl:p-4 flex flex-col justify-between h-full mb-4 ">
      <div className="flex items-center">
        <div className="flex items-center sm:gap-2 sm:pb-2 sm:w-full">
          <input
            type="range"
            value={priceFilter}
            min="0"
            max="1000"
            step="10"
            onChange={onPriceChange}
            className="w-full h-2 accent-[#FFD700] rounded-lg appearance-none cursor-pointer dark:bg-[#8B4513] "
          />
          <PriceTag price={priceFilter} />
        </div>
        <select
          value={sortOption}
          onChange={onSortChange}
          className="py-2  text-[12px] xl:text-sm xl:font-semibold bg-[#191970] text-white rounded-md focus:outline-none outline-none border-none"
        >
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div className="flex flex-row justify-center text-[10px] md:text-xl gap-1 md:gap-4 md:p-1 font-semibold">
        <button
          onClick={() => {
            handleClick("all");
            onCategoryChange("");
          }}
          style={getButtonStyle("all")}
        >
          All Category
        </button>
        <button
          onClick={() => {
            handleClick("wallLamp");
            onCategoryChange("Wall lamp");
          }}
          style={getButtonStyle("wallLamp")}
        >
          Wall Lamp
        </button>
        <button
          onClick={() => {
            handleClick("tableLamp");
            onCategoryChange("Table lamp");
          }}
          style={getButtonStyle("tableLamp")}
        >
          Table Lamp
        </button>
        <button
          onClick={() => {
            handleClick("ceilingLamp");
            onCategoryChange("Ceiling lamp");
          }}
          style={getButtonStyle("ceilingLamp")}
        >
          Ceiling Lamp
        </button>
        <button
          onClick={() => {
            handleClick("nightLamp");
            onCategoryChange("Night lamp");
          }}
          style={getButtonStyle("nightLamp")}
        >
          Night Lamp
        </button>
      </div>
    </div>
  );
};

export default Filters;
