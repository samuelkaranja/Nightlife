import { GalleryImage } from "../components";
import Bar from "../assets/bar.jpg";
import Cocktail from "../assets/cocktails.jpg";
import Counter from "../assets/counter.jpg";
import Glass from "../assets/glass.jpg";
import Drink from "../assets/drinks.jpg";

const galleryImages = [
  {
    id: 1,
    src: Bar,
  },
  {
    id: 2,
    src: Cocktail,
  },
  {
    id: 3,
    src: Counter,
  },
  {
    id: 4,
    src: Glass,
  },
  {
    id: 5,
    src: Drink,
  },
];

const Gallery: React.FC = () => {
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
          beautiful ambient lighting of Belawinski Bar.
        </p>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.src}
              alt="Belawinski Bar gallery"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
