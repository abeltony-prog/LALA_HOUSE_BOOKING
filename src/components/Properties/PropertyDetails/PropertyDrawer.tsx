import { Star } from "lucide-react";
import React from "react";
import { Drawer } from "rsuite";
import EditProperty from "../propertyForm/editProperty";
import BookPropertyModel from "../bookProperty/bookproperty";

export default function PropertyDrawer({
  property,
  isPropertyBooked,
  reload,
  User,
}: any) {
  return (
    <>
      <Drawer.Body>
        {/* Header Section with Images & Host Info */}
        <div className="relative">
          <img
            src={
              property.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7o1w00FioBpklxaTPGkc2F8DtqFU5EZVlHbyYYLArTwJL7wJu7BV6aFduv-cj_xXgZA&usqp=CAU"
            }
            alt={property.title}
            className="h-[250px] w-full rounded-t-lg object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center rounded-lg bg-black p-2 shadow">
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/08/28/13/31/basic-1625962_640.png"
              }
              alt="Host"
              className="h-10 w-10 rounded-full border"
            />
            <div className="ml-3">
              <h5 className="text-sm  font-semibold text-white">
                {property.host}
              </h5>
              <p className="text-xs text-white">Host</p>
            </div>
          </div>
        </div>

        {User?.role === "Renter" ? (
          <>
            <div className="space-y-4 p-6">
              {/* Title, Location, and Price */}
              <div>
                <h2 className="text-2xl font-semibold">{property.title}</h2>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="mt-2 text-lg font-semibold">
                  ${property.cost}{" "}
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
                {property?.amenities?.map((amenity: any, index: any) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            className="st0"
                            d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172 l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
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
                    <div
                      key={index}
                      className="rounded-lg border bg-gray-50 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={review.userImage || "/default-avatar.png"}
                          alt="User"
                          className="h-8 w-8 rounded-full border"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {review.userName}
                          </p>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t bg-white p-4">
              <BookPropertyModel
                reload={reload}
                isPropertyBooked={isPropertyBooked}
                User={User}
                property={property}
              />
            </div>
          </>
        ) : (
          <div className="mt-2">
            <EditProperty propertyDetails={property} />
          </div>
        )}
      </Drawer.Body>
    </>
  );
}
