import Chess from "../assets/Belawinski/game1.jpeg";
import Uno from "../assets/Belawinski/game5.jpeg";
import Halloween from "../assets/Belawinski/halloween1.jpeg";
import Halloween1 from "../assets/Belawinski/halloween3.jpeg";

const images = [
  {
    id: 1,
    src: Chess,
    alt: "Chess Board",
  },
  {
    id: 2,
    src: Halloween,
    alt: "Halloween Decorations",
  },
  {
    id: 3,
    src: Uno,
    alt: "Uno Cards",
  },
  {
    id: 4,
    src: Halloween1,
    alt: "Halloween Decorations",
  },
];

const ExperienceVibe: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-15">
      <div className="w-full max-w-7xl text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Experience the Vibe
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-white">
          A glimpse into the vibrant nights and unforgettable moments at
          Belawinski Bar.
        </p>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceVibe;
