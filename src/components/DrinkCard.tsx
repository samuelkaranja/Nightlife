type DrinkCardProps = {
  image: string;
  title: string;
  price: string;
  tag: string;
};

const DrinkCard: React.FC<DrinkCardProps> = ({ image, title, price, tag }) => {
  const getStyle = (tag: string) => {
    if (tag === "In Stock") return "bg-emerald-400";
    if (tag === "Out Of Stock") return "bg-red-400";
  };

  return (
    <div className="min-w-[240px] overflow-hidden transition">
      <div className="h-80 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-white font-semibold">{price}</p>
      </div>

      <div className={`${getStyle(tag)} text-center rounded p-1`}>
        <span className="text-md text-[#333] font-medium">{tag}</span>
      </div>
    </div>
  );
};

export default DrinkCard;
