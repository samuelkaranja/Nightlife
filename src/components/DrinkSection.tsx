import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DrinkCard from "./DrinkCard";
import { type Drink } from "../data";

type DrinkSectionProps = {
  title: string;
  drinks: Drink[];
};

const DrinkSection: React.FC<DrinkSectionProps> = ({ title, drinks }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-20 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-amber-600">{title}</h2>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            image={drink.image}
            title={drink.title}
            price={drink.price}
            tag={drink.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinkSection;
