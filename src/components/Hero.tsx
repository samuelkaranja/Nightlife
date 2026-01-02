import React from "react";
import Counter from "../assets/counter.jpg";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-24">
      {/* Hero Container */}
      <div
        className="relative w-full max-w-7xl h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${Counter})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide">
            Belawinski <span className="text-amber-500">Bar</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Premium Cocktails and Vibrant Nightlife
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
