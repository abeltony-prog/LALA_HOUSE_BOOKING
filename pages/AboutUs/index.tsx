import MainTheme from "@components/MainTheme";
import React from "react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Team 1",
      role: "Founder",
      image: "https://www.gestcall.it/wp-content/uploads/2017/04/team1.jpg",
    },
    {
      name: "Team 1",
      role: "CTO",
      image:
        "https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_01-540x540.jpg",
    },
    {
      name: "Team 1",
      role: "COO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XWqlmON1G75BbuqhsDfkb6V7to9IbBtpG9HFE6QQJIy26u1YxHXCFLeL4bzAcGAkm1I&usqp=CAU",
    },
  ];
  return (
    <MainTheme>
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-3xl font-bold text-[#2B3990] md:text-4xl">
          About Us
        </h1>

        {/* Mission & Vision */}
        <div className="mb-24 flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-[3rem] rounded-br-none">
              <img
                src="/assets/images/aboutUs.jpg"
                alt="Event crowd"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
          </div>
          <div className="space-y-8 lg:w-1/2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-[#2B3990]">
                Who we are
              </h2>
              <p className="text-gray-600">
              Planet Events Group is an event management and production firm in Rwanda that specializes in crafting events that are truly out of this world. From conceptualization to execution, our innovative team brings a fresh perspective to event planning and production ensuring that each event we create is a unique and unforgettable masterpiece.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-[#2B3990]">Expertise</h2>
              <p className="text-gray-600">
              Whether it's an intimate soirée or a large-scale festival or conference, we bring unparalleled expertise and creativity to every project. Backed by the most experienced team and state-of-the-art stage, sound, and lighting equipment, we ensure that your event leaves a lasting impression.
              </p>
            </div>
            <button className="rounded-full border-2 border-red-500 bg-white px-6 py-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white">
              View More
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="mb-12 text-3xl font-bold text-[#2B3990]">Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="overflow-hidden rounded-[3rem] rounded-br-none">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#2B3990]">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src="https://get-picto.com/wp-content/uploads/2023/07/amazon-logo-png.webp"
                alt={`Client ${index}`}
                className="h-20 w-20 object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>
    </MainTheme>
  );
}
