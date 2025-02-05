import MainTheme from "@components/MainTheme";
import React from "react";

export default function AboutUsPage(){
    const teamMembers = [
        {
          name: "Team 1",
          role: "Founder",
          image: "https://www.gestcall.it/wp-content/uploads/2017/04/team1.jpg"
        },
        {
          name: "Team 1",
          role: "CTO",
          image: "https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_01-540x540.jpg"
        },
        {
          name: "Team 1",
          role: "COO",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XWqlmON1G75BbuqhsDfkb6V7to9IbBtpG9HFE6QQJIy26u1YxHXCFLeL4bzAcGAkm1I&usqp=CAU"
        }
      ]
    return(
        <MainTheme>
       <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-12">
          About Us
        </h1>

        {/* Mission & Vision */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="lg:w-1/2">
            <div className="rounded-[3rem] rounded-br-none overflow-hidden">
              <img
                src="/assets/images/aboutUs.jpg"
                alt="Event crowd"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2B3990] mb-4">Mission</h2>
              <p className="text-gray-600">
                is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#2B3990] mb-4">Vision</h2>
              <p className="text-gray-600">
                is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <button className="bg-white text-red-500 px-6 py-2 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-colors">
              View More
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#2B3990] mb-12">Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="rounded-[3rem] rounded-br-none overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#2B3990]">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src="https://get-picto.com/wp-content/uploads/2023/07/amazon-logo-png.webp"
                alt={`Client ${index}`}
                className="h-20 w-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
       </MainTheme>
    )
}