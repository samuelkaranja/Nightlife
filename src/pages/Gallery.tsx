import { useEffect, useState } from "react";
import { GalleryImage } from "../components";
import { fetchGalleryImages } from "../services/supabase";

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    const loadImageData = async () => {
      const galleryData = await fetchGalleryImages();
      setGallery(galleryData);
    };

    loadImageData();
  }, []);

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="w-full max-w-7xl text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Gallery & Atmosphere
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-white">
          A visually rich gallery showcasing the cozy chill-out atmosphere and
          beautiful ambient lighting of Belawinski Cocktail Bar.
        </p>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {gallery.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.image_url}
              alt={image.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
