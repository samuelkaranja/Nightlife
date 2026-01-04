type DrinkCardProps = {
  image: string;
  title: string;
  price: string;
};

const DrinkCard: React.FC<DrinkCardProps> = ({ image, title, price }) => {
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
    </div>
  );
};

export default DrinkCard;
