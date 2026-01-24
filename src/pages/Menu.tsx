import { useEffect, useMemo, useState } from "react";
import DrinkSection from "../components/DrinkSection";
import { fetchDrinks } from "../services/supabase";
import { type DbDrink } from "../types/dbDrink";
import { type Drink } from "../types/uiDrink";
import { mapDbDrinkToUiDrink } from "../utils/mapDrink";

const Menu: React.FC = () => {
  const [dbDrinks, setDbDrinks] = useState<DbDrink[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDrinks();
      setDbDrinks(data);
    };

    loadData();
  }, []);

  const ginDrinks: Drink[] = useMemo(
    () =>
      dbDrinks.filter((drink) => drink.type === "Gin").map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

  const vodkaDrinks: Drink[] = useMemo(
    () =>
      dbDrinks
        .filter((drink) => drink.type === "Vodka")
        .map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

  const whiskeyDrinks: Drink[] = useMemo(
    () =>
      dbDrinks
        .filter((drink) => drink.type === "Whiskey")
        .map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

  const rumDrinks: Drink[] = useMemo(
    () =>
      dbDrinks.filter((drink) => drink.type === "Rum").map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

  const brandyDrinks: Drink[] = useMemo(
    () =>
      dbDrinks
        .filter((drink) => drink.type === "Brandy")
        .map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

  const tequilaDrinks: Drink[] = useMemo(
    () =>
      dbDrinks
        .filter((drink) => drink.type === "Tequila")
        .map(mapDbDrinkToUiDrink),
    [dbDrinks],
  );

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
        <DrinkSection title="Whiskey Selections" drinks={whiskeyDrinks} />
        <DrinkSection title="Rum Selections" drinks={rumDrinks} />
        <DrinkSection title="Brandy Selections" drinks={brandyDrinks} />
        <DrinkSection title="Tequila Selections" drinks={tequilaDrinks} />
      </div>
    </section>
  );
};

export default Menu;
