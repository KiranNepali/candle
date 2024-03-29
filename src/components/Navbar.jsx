import React from "react";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="w-full top-0 fixed shadow-sm bg-[#FFFBF5] z-50">
      <div className=" flex justify-between items-center mx-[10rem] my-[1.5rem] font-semibold text-[12px] border-b-gray-300">
        {/* <img src={Logo} alt="" /> */}
        <div className="text-[#76453B]">
          {/* <img src={Logo} alt="" classN ame="w-[50px] leading-none" /> */}
          COMPASSION
        </div>
        <ul className="flex justify-center w-full gap-[20rem]">
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>CONTACT US</li>
        </ul>
        <div>SEARCH</div>
      </div>
    </div>
  );
};
