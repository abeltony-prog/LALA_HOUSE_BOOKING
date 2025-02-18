import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import Property from "./property";
import { userAuth } from "context/auth";

export default function PropertyList() {
  const LoggedUser = useContext(userAuth) as unknown as any;

  let properties;
  try {
    properties =
      LoggedUser?.userInfo?.role === "Renter"
        ? [
            {
              title: "Cozy Central Apartment",
              location: "El Camp d'En Grassot i Gracia Nova, Barcelona",
              price: "5,300",
              image:
                "https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
              beds: "1 bedroom",
              baths: "1 bath",
              area: "50 m²",
            },
          ]
        : LoggedUser?.userInfo?.hosts[0]?.properties;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">497 properties</span>
        <button className="flex items-center gap-2 text-sm">
          Sort by newest
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Property Grid - 4 per row */}
      <div className="grid grid-cols-4 gap-6">
        {properties?.map((property: { title: any }) => (
          <Property key={property?.title} property={property} />
        ))}
      </div>
    </div>
  );
}
