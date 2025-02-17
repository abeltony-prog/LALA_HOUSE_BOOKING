import { BedDouble, ShowerHead, Star, Users, UtensilsCrossed } from "lucide-react";
import React from "react";
import { Drawer, Placeholder } from "rsuite";

export default function PropertyDrawer({property} : any){
    return(
        <>
    <Drawer.Body>
        {/* Header Section with Images & Host Info */}
        <div className="relative">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="h-[250px] w-full object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4 flex items-center bg-white/80 p-2 rounded-lg shadow">
            <img
              src={property.hostImage || "/default-avatar.png"}
              alt="Host"
              className="h-10 w-10 rounded-full border"
            />
            <div className="ml-3">
              <h4 className="text-sm font-semibold">{property.hostName}</h4>
              <p className="text-xs text-gray-600">Host</p>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6 space-y-4">
          {/* Title, Location, and Price */}
          <div>
            <h2 className="text-2xl font-semibold">{property.title}</h2>
            <p className="text-sm text-gray-500">{property.location}</p>
            <p className="text-lg font-semibold mt-2">${property.price} <span className="text-sm text-gray-500">/ month</span></p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold">About this place</h3>
            <p className="text-sm text-gray-600">{property.description}</p>
          </div>

          {/* House Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-gray-700" />
              <span className="text-sm">{property.beds} beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-700" />
              <span className="text-sm">Accommodates {property.capacity} people</span>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-gray-700" />
              <span className="text-sm">{property.kitchen ? "Kitchen Available" : "No Kitchen"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShowerHead className="h-5 w-5 text-gray-700" />
              <span className="text-sm">{property.baths} baths</span>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="space-y-4 grid grid-cols-2 gap-4 mt-2">
              {[{
                userName: "dkdkds",
                rating:5,
                comment: "the house is greate and care"
              },
              {
                userName: "James",
                rating:4,
                comment: "the house is greate and care"
              }
            ].map((review: any, index: number) => (
                <div key={index} className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.userImage || "/default-avatar.png"}
                      alt="User"
                      className="h-8 w-8 rounded-full border"
                    />
                    <div>
                      <p className="text-sm font-semibold">{review.userName}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div className="p-4 border-t bg-white">
          <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </Drawer.Body>
        </>
    )
}