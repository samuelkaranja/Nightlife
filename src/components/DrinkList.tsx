import { useEffect, useState } from "react";
import { deleteDrink, fetchDrinks } from "../services/supabase";

const DrinkList = () => {
  const [drinks, setDrinks] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const drinksData = await fetchDrinks();
      setDrinks(drinksData);
    };

    loadData();
  }, []);

  const handleDeleteDrink = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this drink?")) return;

    await deleteDrink(id);
    setDrinks((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold mb-8">
        All Drinks ({drinks.length})
      </h2>

      {drinks.length === 0 ? (
        <p className="text-neutral-500 text-sm">No drinks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <img
                src={drink.image_url}
                alt={drink.name}
                className="w-full h-30 object-cover"
              />

              <div className="p-4 space-y-1">
                <h3 className="font-semibold">{drink.name}</h3>
                <p className="text-sm text-neutral-600">Type: {drink.type}</p>
                <p className="text-sm text-neutral-600">
                  Price: KSh {drink.price}
                </p>
                <p className="text-sm text-neutral-600">
                  Status: {drink.status}
                </p>

                <button
                  onClick={() => handleDeleteDrink(drink.id)}
                  className="mt-3 bg-red-500 hover:bg-red-600 text-white
                               rounded-lg px-3 py-1 text-sm transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DrinkList;
