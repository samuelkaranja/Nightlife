import EventCard from "./EventCard";
import Party from "../assets/cocktailparty.png";

const events = [
  {
    id: 1,
    image: Party,
    title: "Live Jazz Night",
    date: "Friday, March 15",
    time: "7:00 PM – 11:00 PM",
  },
  {
    id: 2,
    image: Party,
    title: "Cocktail Masterclass",
    date: "Saturday, March 23",
    time: "6:00 PM – 8:00 PM",
  },
  {
    id: 3,
    image: Party,
    title: "DJ Night",
    date: "Friday, April 5",
    time: "8:00 PM – Late",
  },
  {
    id: 4,
    image: Party,
    title: "Themed Cocktail Night",
    date: "Saturday, April 12",
    time: "7:00 PM – 11:00 PM",
  },
  {
    id: 5,
    image: Party,
    title: "Cocktail Masterclass",
    date: "Saturday, March 23",
    time: "6:00 PM – 8:00 PM",
  },
];

const EventsList: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
