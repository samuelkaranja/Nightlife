import { EventsList } from "../components";

const Events: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-15">
        <div className="w-full max-w-7xl text-center py-10 lg:py-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Happening at Belawinski
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white">
            Explore our curated list of upcoming special events, live music and
            themed nights designed to elevate your evenings.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <EventsList />
    </>
  );
};

export default Events;
