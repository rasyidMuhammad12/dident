// src/sections/Hero.jsx
import React from "react";
import image1 from "../assets/image1.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="flex px-4 flex-col-reverse md:flex-row items-center gap-12 py-16 md:py-20 overflow-hidden">
      
      {/* Text Section */}
      <div
        className="flex-1 lg:pl-6 space-y-10 text-center md:text-left opacity-0 animate-fade-up"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-syne leading-tight">
          The Next Evolution in Digital Identity Verification
        </h1>
        <p className="text-gray-600 text-base px-4 lg:px-0 md:text-lg max-w-2xl mx-auto md:mx-0">
          With AI-powered recognition and Web3 integration, dIdent verifies your identity securely — 
          no accounts, no data storage, just pure decentralization.
        </p>
        <div>
          <Link to="/verify">
           <button className="bg-black text-white px-6 py-3 rounded-lg text-sm md:text-base cursor-pointer">
            Verify Now
          </button></Link>
         
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex-1 flex justify-center opacity-0 animate-fade-up"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        <img
          src={image1}
          alt="Mockup"
          className="w-[380px] md:w-[580px] lg:w-[600px]"
        />
      </div>

    </section>
  );
};

export default Hero;
