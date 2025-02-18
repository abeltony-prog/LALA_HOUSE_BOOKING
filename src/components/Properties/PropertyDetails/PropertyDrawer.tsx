import {
  BedDouble,
  ShowerHead,
  Star,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";
import { Drawer, Placeholder } from "rsuite";
import EditProperty from "../propertyForm/editProperty";

export default function PropertyDrawer({ property , User}: any) {
  return (
    <>
      <Drawer.Body>
        {/* Header Section with Images & Host Info */}
        <div className="relative">
          <img
            src={property.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7o1w00FioBpklxaTPGkc2F8DtqFU5EZVlHbyYYLArTwJL7wJu7BV6aFduv-cj_xXgZA&usqp=CAU"}
            alt={property.title}
            className="h-[250px] w-full rounded-t-lg object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center rounded-lg bg-black p-2 shadow">
            <img
              src={"https://cdn.pixabay.com/photo/2016/08/28/13/31/basic-1625962_640.png"}
              alt="Host"
              className="h-10 w-10 rounded-full border"
            />
            <div className="ml-3">
              <h5 className="text-sm  text-white font-semibold">{property.host}</h5>
              <p className="text-xs text-white">Host</p>
            </div>
          </div>
        </div>

        {
User?.role === "Renter" ? (
    <><div className="space-y-4 p-6">
                          {/* Title, Location, and Price */}
                          <div>
                              <h2 className="text-2xl font-semibold">{property.title}</h2>
                              <p className="text-sm text-gray-500">{property.location}</p>
                              <p className="mt-2 text-lg font-semibold">
                                  ${property.price}{" "}
                                  <span className="text-sm text-gray-500">/ month</span>
                              </p>
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
                                  <span className="text-sm">
                                      Accommodates {property.capacity} people
                                  </span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <UtensilsCrossed className="h-5 w-5 text-gray-700" />
                                  <span className="text-sm">
                                      {property.kitchen ? "Kitchen Available" : "No Kitchen"}
                                  </span>
                              </div>
                              <div className="flex items-center gap-2">
                                  <ShowerHead className="h-5 w-5 text-gray-700" />
                                  <span className="text-sm">{property.baths} baths</span>
                              </div>
                          </div>

                          {/* Reviews Section */}
                          <div>
                              <h3 className="text-lg font-semibold">Reviews</h3>
                              <div className="mt-2 grid grid-cols-2 gap-4 space-y-4">
                                  {[
                                      {
                                          userName: "dkdkds",
                                          rating: 5,
                                          comment: "the house is greate and care",
                                      },
                                      {
                                          userName: "James",
                                          rating: 4,
                                          comment: "the house is greate and care",
                                      },
                                  ].map((review: any, index: number) => (
                                      <div key={index} className="rounded-lg border bg-gray-50 p-3">
                                          <div className="flex items-center gap-2">
                                              <img
                                                  src={review.userImage || "/default-avatar.png"}
                                                  alt="User"
                                                  className="h-8 w-8 rounded-full border" />
                                              <div>
                                                  <p className="text-sm font-semibold">{review.userName}</p>
                                                  <div className="flex gap-1">
                                                      {[...Array(review.rating)].map((_, i) => (
                                                          <Star key={i} className="h-4 w-4 text-yellow-500" />
                                                      ))}
                                                  </div>
                                              </div>
                                          </div>
                                          <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div><div className="border-t bg-white p-4">
                              <button className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">
                                  Book Now
                              </button>
                          </div>
                          </>
):(
   <div className="mt-2">
     <EditProperty propertyDetails={property} />
   </div>
)
}
      

   
      </Drawer.Body>
    </>
  );
}
