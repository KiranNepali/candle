import React from "react";

export const Card = () => {
  return (
    <div className="py-10 w-full">
      <div className="w-[29rem] h-[29rem] bg-white flex items-end z-50 relative overflow-hidden">
        <img
          className="absolute z-10"
          src="https://www.essentialparfums.com/wp-content/uploads/BOUGIE_PARFUMEE-SCENTED_CANDLE_bois-imperial.jpg"
          alt=""
        />
        <div className="z-30 font-semibold ml-6 mb-8">
          <div className="mb-3">CHRISTMAS</div>
          <button className=" bg-white px-14 py-3 border-none">
            View products
          </button>
        </div>
      </div>
    </div>
  );
};
