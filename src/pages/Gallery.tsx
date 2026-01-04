import { GalleryImage } from "../components";
import Crowd from "../assets/Belawinski/crowd.jpg";
import Mix from "../assets/Belawinski/mixologist.jpg";
import Seat from "../assets/Belawinski/seat1.jpeg";
import Event from "../assets/Belawinski/halloween1.jpeg";
import Event2 from "../assets/Belawinski/halloween2.jpeg";
import Event3 from "../assets/Belawinski/halloween3.jpeg";
import Game from "../assets/Belawinski/game1.jpeg";
import Game1 from "../assets/Belawinski/game2.jpeg";
import Game2 from "../assets/Belawinski/game3.jpeg";
import Game3 from "../assets/Belawinski/game4.jpeg";
import Game4 from "../assets/Belawinski/game5.jpeg";
import Cocktail from "../assets/Belawinski/cocktail6.jpg";

const galleryImages = [
  {
    id: 1,
    src: Crowd,
  },
  {
    id: 2,
    src: Mix,
  },
  {
    id: 3,
    src: Seat,
  },
  {
    id: 4,
    src: Event,
  },
  {
    id: 5,
    src: Event2,
  },
  {
    id: 6,
    src: Event3,
  },
  {
    id: 7,
    src: Game,
  },
  {
    id: 8,
    src: Game1,
  },
  {
    id: 9,
    src: Game2,
  },
  {
    id: 10,
    src: Game3,
  },
  {
    id: 11,
    src: Game4,
  },
  {
    id: 12,
    src: Cocktail,
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
