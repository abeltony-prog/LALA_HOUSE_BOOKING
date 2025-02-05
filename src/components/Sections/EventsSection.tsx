import React from "react";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      image: "https://www.planetevents.rw/assets/img/images/11.jpg",
      alt: "Music producer in green sweater working in studio",
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/www.topafricanews.com/wp-content/uploads/2024/07/53831498254_d1a46a19aa_o.jpg?fit=1000%2C667&ssl=1",
      alt: "Person in orange jacket at mixing board",
    },
    {
      id: 3,
      image: "/assets/images/tour-du-rwanda.jpg",
      alt: "Music producer in green sweater working in studio",
    },
    {
      id: 4,
      image: "https://www.planetevents.rw/assets/img/images/8.jpg",
      alt: "Music producer in green sweater working in studio",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-12">
      {/* Events Section */}
      <h2 className="mb-12 text-3xl font-bold text-[#2B3990] md:text-4xl">
        Events
      </h2>

      {/* Events Grid */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative ${index === 1 ? "md:translate-y-12" : ""}`}
          >
            <div className="transform overflow-hidden rounded-3xl shadow-lg transition-transform hover:scale-105">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.alt}
                className="h-[200px] w-full object-cover md:h-[300px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Bar */}
      <div className="flex flex-col items-center justify-between rounded-2xl bg-red-500 p-6 sm:flex-row">
        <h3 className="mb-4 text-2xl font-bold text-white sm:mb-0">
          Lorem Ipsum
        </h3>
        <button className="rounded-full bg-white px-8 py-3 text-red-500 transition-colors hover:bg-gray-100">
          Call Us
        </button>
      </div>

      {/* Blue Section */}
      <div className="mt-12 h-32 rounded-t-2xl bg-[#2B3990]">
        {/* Content for blue section can be added here */}
      </div>
    </div>
  );
}
