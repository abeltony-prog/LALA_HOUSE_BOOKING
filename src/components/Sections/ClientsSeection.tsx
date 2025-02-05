import React from "react";

export default function ClientsSection() {
  const clients = [
    {
      logo: "https://pbs.twimg.com/profile_images/620599326243483648/QvR_HQqv_400x400.jpg", // replace with the actual logo
      name: "Tour du Rwanda 2024",
      description:
        "As the official event production partner, we delivered world-class stage setups, LED displays, sound systems, and dynamic lighting across 8 districts, enhancing the international cycling competition's atmosphere.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7FgZlbjX45dS7-2dXcP79iC3W_Cce6VYtA&s", // replace with the actual logo
      name: "RPF Campaign 2024",
      description:
        "We managed and produced large-scale events for the RPF Campaign, ensuring seamless execution, impactful visuals, and top-tier production services for this high-profile initiative.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-2 md:py-12">
      <h2 className="mb-6 text-3xl font-bold text-[#2B3990] md:text-4xl">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-[#2B3990]">
                {client.name}
              </h3>
              <p className="text-gray-700">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
