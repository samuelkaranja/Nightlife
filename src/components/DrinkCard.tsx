type DrinkCardProps = {
  image: string;
  title: string;
  price: string;
  status: string;
};

const getStyle = (status: string) => {
  if (status === "In Stock") return "bg-emerald-400";
  if (status === "Out Of Stock") return "bg-red-400";
  return "bg-gray-400";
};

const DrinkCard: React.FC<DrinkCardProps> = ({
  image,
  title,
  price,
  status,
}) => {
  const isOutOfStock = status === "Out Of Stock";

  return (
    <div className="min-w-[240px] overflow-hidden transition">
      {/* Image section */}
      <div className="relative h-60 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 
            ${isOutOfStock ? "opacity-60" : "hover:scale-105"}`}
        />

        {/* Tag badge */}
        <div
          className={`absolute top-3 right-2 px-3 py-1 rounded-full 
            text-sm font-medium text-[#333] ${getStyle(status)}`}
        >
          {status}
        </div>
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-white font-semibold">Kshs {price}</p>
      </div>
    </div>
  );
};

export default DrinkCard;
