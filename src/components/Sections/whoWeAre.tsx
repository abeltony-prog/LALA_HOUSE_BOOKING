import React from "react";
import ClientsSection from "./ClientsSeection";

export default function WhoWeAreSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-12">
      <h2 className="mb-8 text-3xl font-bold text-[#2B3990] md:text-4xl">
        Who we are
      </h2>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="space-y-6 lg:w-2/3">
          <p className="text-gray-700">
            At Planet Events Group, we are committed to creating exceptional
            experiences. As a leading event management and production firm in
            Rwanda, our innovative approach ensures that every event is a
            masterpiece.
          </p>
          <ClientsSection />
        </div>
        <div className="lg:w-1/3">
          <div className="relative">
            <div className="absolute -top-4 -right-4 h-full w-full bg-red-600"></div>
            <img
              src="/assets/images/WhoWeAre.jpg"
              alt="Stage Setup"
              className="relative h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
