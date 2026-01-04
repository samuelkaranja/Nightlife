import React from "react";
import CocktailCard from "./CocktailCard";
import Glass from "../assets/Belawinski/cocktail2.jpg";
import Glass1 from "../assets/Belawinski/cocktail3.jpg";
import Glass2 from "../assets/Belawinski/cocktail4.jpg";
import Glass3 from "../assets/Belawinski/cocktail5.jpg";

const Cocktails: React.FC = () => {
  const drinks = [
    {
      id: 1,
      image: Glass,
      title: "The Golden Hour",
      info: "A vibrant mix of gin, elderflower, and grapefruit.",
    },
    {
      id: 2,
      image: Glass1,
      title: "Midnight Sapphire",
      info: "A bold blend of whiskey, blueberry liquer, and bitters.",
    },
    {
      id: 3,
      image: Glass2,
      title: "Crimson Ember",
      info: "A rich and smoky concotion of mezcal and spiced cherry.",
    },
    {
      id: 4,
      image: Glass3,
      title: "Emerald Haze",
      info: "A crisp and herbal mixture of vodka, basil, and lime.",
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 ld:py-15">
      <div className="w-full max-w-7xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
          Signature Cocktails
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink) => (
            <CocktailCard
              key={drink.id}
              image={drink.image}
              title={drink.title}
              info={drink.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
