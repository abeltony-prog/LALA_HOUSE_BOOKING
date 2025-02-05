import React from "react";

export default function ClientsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="mb-12 text-3xl font-bold text-[#2B3990] md:text-4xl">
        Clients
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src="https://get-picto.com/wp-content/uploads/2023/07/amazon-logo-png.webp"
              alt={`Client ${index}`}
              className="h-24 w-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
