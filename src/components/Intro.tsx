import React from "react";
import Cocktail from "../assets/glass.jpg";
import Bar from "../assets/bar.jpg";

const Intro: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-15 mt-15">
      <div className="w-full max-w-7xl text-center">
        {/* Title */}
        <h2 className="text-5xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Welcome to <span className="text-amber-600">Belawinski</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-white leading-relaxed">
          Discover a world where sophisticated mixology meets vibrant nightlife.
          Belawinski offers an exclusive atmosphere, premium cocktails, and an
          unforgettable experience. Join us for an evening of elegance and
          excitement.
        </p>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={Cocktail}
                alt="Crafted cocktails"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white underline">
              Crafted Cocktails
            </h3>

            <p className="mt-2 text-white max-w-sm">
              Our expert mixologist creates unique and classic cocktails using
              only the finest ingredients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={Bar}
                alt="Elegant atmosphere"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white underline">
              Elegant Atmosphere
            </h3>

            <p className="mt-2 text-white max-w-sm">
              Immerse yourself in our stylish decor, designed for the perfect
              night out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
