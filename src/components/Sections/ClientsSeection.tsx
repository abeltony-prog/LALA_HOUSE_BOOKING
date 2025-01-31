import React from "react";

export default function ClientsSection(){
    return(
        <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-12">
          Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
    )
}