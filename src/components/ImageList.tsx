import { useEffect, useState } from "react";
import { deleteGalleryImage, fetchGalleryImages } from "../services/supabase";

const ImageList = () => {
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const galleryData = await fetchGalleryImages();
      setGallery(galleryData);
    };

    loadData();
  }, []);

  const handleDeleteGallery = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    await deleteGalleryImage(id);
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold mb-8">
        Gallery Images ({gallery.length})
      </h2>

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
  );
};

export default ImageList;
