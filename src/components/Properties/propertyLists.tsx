import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import Property from "./property";
import { userAuth } from "context/auth";
import AddNewPropertyForm from "./propertyForm/addNewProperty";

export default function PropertyList() {
  const LoggedUser = useContext(userAuth) as unknown as any;

  let properties;

  try {
    properties =
      LoggedUser?.userInfo?.role === "Renter"
        ? [
            {
              name: "Cozy Central Apartment",
              description: "El Camp d'En Grassot i Gracia Nova, Barcelona",
              cost: "5,300",
              image:
                "https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
              beds: "1 bedroom",
              bath: "1 bath",
              per: "50 m²",
            },
          ]
        : LoggedUser?.userInfo?.hosts[0]?.properties?.map((pro: any) => {
            return {
              name: pro?.name,
              description: pro.description,
              cost: pro?.cost,
              image:
                pro?.image ||
                `https://thumb.ac-illust.com/1f/1fe58b1c6283f34757e9a7cc73ebe806_t.jpeg`,
              beds: pro?.beds,
              bath: pro?.bath,
              per: pro?.per,
              amenities: pro?.amenities,
              host: LoggedUser?.userInfo?.name,
              type: pro?.type,
              property_id: pro?.PID,
            };
          });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">
          {LoggedUser?.userInfo?.hosts[0]?.properties?.length} properties
        </span>
        <AddNewPropertyForm user={LoggedUser?.userInfo} />
      </div>

      {/* Property Grid - 4 per row */}
      <div className="grid grid-cols-4 gap-6">
        {properties?.map((property: any) => (
          <Property
            User={LoggedUser?.userInfo}
            key={property?.name}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}
