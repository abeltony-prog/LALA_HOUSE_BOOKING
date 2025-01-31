import React from "react";

export default function EventsSection(){
    const events = [
        {
          id: 1,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKEBak-4eVMbinGqXuaH_TJKFQuePXrpixg&s",
          alt: "Music producer in green sweater working in studio"
        },
        {
          id: 2, 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKEBak-4eVMbinGqXuaH_TJKFQuePXrpixg&s",
          alt: "Person in orange jacket at mixing board"
        },
        {
          id: 3,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKEBak-4eVMbinGqXuaH_TJKFQuePXrpixg&s", 
          alt: "Music producer in green sweater working in studio"
        },
        {
          id: 4,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKEBak-4eVMbinGqXuaH_TJKFQuePXrpixg&s",
          alt: "Music producer in green sweater working in studio"
        }
      ]
    
    return(
        <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Events Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-12">
        Events
      </h2>

      {/* Events Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`relative ${
              index === 1 ? 'md:translate-y-12' : ''
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.alt}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Bar */}
      <div className="bg-red-500 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between">
        <h3 className="text-2xl font-bold text-white mb-4 sm:mb-0">
          Lorem Ipsum
        </h3>
        <button className="bg-white text-red-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
          Call Us
        </button>
      </div>

      {/* Blue Section */}
      <div className="mt-12 bg-[#2B3990] h-32 rounded-t-2xl">
        {/* Content for blue section can be added here */}
      </div>
    </div>
    )
}