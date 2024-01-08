import React from "react";
// import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};
