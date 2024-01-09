import React from "react";
import ProductImg1 from "../assets/img1.jpg";
export const TopProducts = () => {
  return (
    <div className="w-full h-screen bg-[#faf6f0]">
      <div className="max-w-[1100px] mx-auto w-full  h-full p-3 flex justify-center  flex-col">
        <div className="font-bold text-[2rem] flex flex-col  mt-8 leading-none">
          <span>TOP PRODUCTS</span>
        </div>
        <div className="grid grid-cols-3 gap-1 w-full mx-auto p-4">
          <div className="h-[40rem] w-[16rem] mt-[8rem] flex flex-col justify-between items-center overflow-hidden">
            <img
              src={ProductImg1}
              className="h-[35rem] w-full object-cover"
              alt=""
            />
            <div className="flex justify-center flex-col p-3">
              <span className="font-semibold">TITLE</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              </p>
            </div>
          </div>
          {/* product 2  */}
          <div className="h-[40rem] w-[16rem] mt-[4rem] flex flex-col justify-between items-center overflow-hidden">
            <img
              src={ProductImg1}
              className="h-[35rem] w-full object-cover"
              alt=""
            />
            <div className="flex justify-center flex-col p-3">
              <span className="font-semibold">TITLE</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              </p>
            </div>
          </div>
          {/* prodcut 3  */}
          <div className="h-[40rem] w-[16rem]  flex flex-col justify-between items-center overflow-hidden">
            <img
              src={ProductImg1}
              className="h-[35rem] w-full object-cover"
              alt=""
            />
            <div className="flex justify-center flex-col p-3">
              <span className="font-semibold">TITLE</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
