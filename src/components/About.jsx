import React from "react";
import AboutImg1 from "../assets/img1.jpg";

export const About = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full flex justify-center gap-20">
        <div className="w-full flex justify-end items-center">
          <div
            className="w-[30rem] h-[40rem]"
            style={{
              backgroundImage: `url(${AboutImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full flex justify-center items-start flex-col">
          <span className="font-bold text-[4rem] leading-tight">OUR STORY</span>
          <p className="w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, tempora explicabo quam nemo excepturi consequuntur
            suscipit impedit! Repellat pariatur modi cum odit dolor porro
            eveniet delectus magni, deserunt rerum expedita.
          </p>
        </div>
      </div>
    </div>
  );
};
