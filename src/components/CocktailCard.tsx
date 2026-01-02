type CocktailCardProps = {
  image: string;
  title: string;
  info: string;
};

const CocktailCard: React.FC<CocktailCardProps> = ({ image, title, info }) => {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-4 bg-[#192233]">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-2 text-[#6e7c9a] text-sm leading-relaxed">{info}</p>
      </div>
    </div>
  );
};

export default CocktailCard;
