import React from "react";

const PriceTag = ({ price }) => {
  return (
    <div className="inline-block relative bg-[#8B4513] rounded-[3px_4px_4px_3px] border-l border-[#8B4513] ml-[19px] text-[#FFD700] font-dancingScript text-[12px] font-bold leading-[38px] px-1 py-0 m-2 w-[50%]">
      <span>$ {price}/-</span>

      <div className="absolute left-[-19px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[19px] border-t-transparent border-b-[19px] border-b-transparent border-r-[19px] border-r-[#8B4513]"></div>

      <div className="absolute left-[-9px] top-[17px] bg-[#FFD700] rounded-full w-[4px] h-[4px]"></div>
    </div>
  );
};

export default PriceTag;
