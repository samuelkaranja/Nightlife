type EventCardProps = {
  image: string;
  title: string;
  date: string;
  time: string;
};

const EventCard: React.FC<EventCardProps> = ({ image, title, date, time }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Poster */}
      <div className="h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="px-5 py-3 text-left">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm text-gray-600">{date}</p>

        <p className="text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default EventCard;
