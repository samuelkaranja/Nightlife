import { useEffect, useState } from "react";
import {
  fetchDrinks,
  deleteDrink,
  fetchGalleryImages,
  deleteGalleryImage,
} from "../../services/supabase";

const AdminDashboard = () => {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const drinksData = await fetchDrinks();
      const galleryData = await fetchGalleryImages();
      setDrinks(drinksData);
      setGallery(galleryData);
    };

    loadData();
  }, []);

  const handleDeleteDrink = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this drink?")) return;

    await deleteDrink(id);
    setDrinks((prev) => prev.filter((d) => d.id !== id));
  };

  const handleDeleteGallery = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    await deleteGalleryImage(id);
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <section className="space-y-12">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="text-neutral-600">
          Manage drinks and gallery images uploaded to the website.
        </p>
      </div>

      {/* Drinks Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Drinks</h2>

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

      {/* Gallery Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Gallery Images</h2>

        {gallery.length === 0 ? (
          <p className="text-neutral-500 text-sm">
            No gallery images uploaded yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((g) => (
              <div
                key={g.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <img
                  src={g.image_url}
                  alt={g.title || "Gallery Image"}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <p className="font-medium text-sm">{g.title || "No Title"}</p>

                  <button
                    onClick={() => handleDeleteGallery(g.id)}
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
    </section>
  );
};

export default AdminDashboard;
