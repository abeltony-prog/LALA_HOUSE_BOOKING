import React from "react";
import ClientsSection from "./ClientsSeection";

export default function WhoWeAreSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="mb-8 text-3xl font-bold text-[#2B3990] md:text-4xl">
        Who we are
      </h2>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="space-y-6 lg:w-1/2">
          <p className="text-gray-700">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </p>
          <p className="text-gray-700">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </p>
          <ClientsSection />
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -right-4 h-full w-full bg-red-600"></div>
            <img
              src="/assets/images/WhoWeAre.jpg"
              alt="Stage Setup"
              className="relative h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
