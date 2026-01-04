import { DrinkSection } from "../components";
import { ginDrinks, vodkaDrinks } from "../data";

const Menu: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-5">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Our Drink Selection
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-white">
            Explore a carefully curated range of drinks, featuring renowned
            brands and timeless favorites crafted for every taste.
          </p>
        </div>

        {/* Drink Sections */}
        <DrinkSection title="Gin Selections" drinks={ginDrinks} />

        <DrinkSection title="Vodka Selections" drinks={vodkaDrinks} />
      </div>
    </section>
  );
};

export default Menu;
