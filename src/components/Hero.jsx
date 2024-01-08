import React from "react";
import HeroImg1 from "../assets/img1.jpg";
import HeroImg2 from "../assets/img2.jpg";
import HeroImg3 from "../assets/img3.jpg";
import HeroImg4 from "../assets/img4.jpg";

export const Hero = () => {
  return (
    <div className="w-full h-full py-20">
      <div className="flex justify-center items-center mx-auto w-full h-full gap-10  relative z-100 mt-10">
        <div className="w-full h-full">
          <div
            style={{
              backgroundImage: `url(${HeroImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[14rem] h-[15rem] bg-gray-400 absolute top-20 left-[20rem] overflow-hidden"
          ></div>
          <div
            className="w-[10rem] h-[13rem] bg-gray-500 absolute top-[9rem]  left-[15rem]"
            style={{
              backgroundImage: `url(${HeroImg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="absolute w-[25rem] h-[14rem] bottom-[9rem] bg-gray-300"
            style={{
              backgroundImage: `url(${HeroImg3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full flex flex-col justify-center items-center leading-tight tracking-wide">
          <span className="font-bold text-[2rem]">HANDMADE</span>
          <span className="font-bold text-[8rem]">CANDLES</span>
          <span className="font-bold text-[8rem]">BY</span>
          <span className="font-bold text-[3rem]">COMPASSION</span>
          <p className="text-center mt-5">
            "Explore our hero-inspired candle collection! From captivating
            scents to radiant glows, our candles embody the spirit of bravery
            and warmth. Illuminate your space with the essence of heroes—each
            flame a testament to their strength and inspiration. Let our curated
            selection infuse your surroundings with the noble aura of heroism."
          </p>
        </div>
        <div className="w-full h-full">
          <div
            className="absolute w-[25rem] h-[14rem] top-20 right-0 bg-gray-300"
            style={{
              backgroundImage: `url(${HeroImg4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${HeroImg3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[14rem] h-[15rem] bg-gray-400 absolute bottom-[9rem] right-[20rem]  "
          ></div>
          <div
            style={{
              backgroundImage: `url(${HeroImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[10rem] h-[13rem] bg-gray-500 absolute bottom-[15rem]  right-[15rem]"
          ></div>
        </div>
      </div>
    </div>
  );
};
