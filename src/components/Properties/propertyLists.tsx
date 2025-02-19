import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import Property from "./propertyView";
import { userAuth } from "context/auth";
import AddNewPropertyForm from "./propertyForm/addNewProperty";

export default function PropertyList() {
  const Logged = useContext(userAuth) as unknown as any;

  let properties;

  try {
    properties =
    Logged?.userInfo?.role === "Renter"
        ?
        Logged?.Properties?.map((property : any)=>{
          return{
            name: property?.name,
            description: property?.description,
            cost: property?.cost,
            image:
            property?.image ||
            `https://thumb.ac-illust.com/1f/1fe58b1c6283f34757e9a7cc73ebe806_t.jpeg`,
            beds: property?.beds,
            bath: property?.bath,
            per: property?.per,
            amenities: property?.amenities,
            type: property?.type,
            host:property?.hosts?.name,
            property_id: property?.PID
          }
        })
        : Logged?.userInfo?.hosts[0]?.properties?.map((pro: any) => {
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
              host: Logged?.userInfo?.name,
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
          {Logged?.userInfo?.hosts[0]?.properties?.length} properties
        </span>
        {
          Logged?.userInfo?.role === "Host" && (
<AddNewPropertyForm user={Logged?.userInfo} />
          )
           
        }
       
      </div>

      {/* Property Grid - 4 per row */}
      <div className="grid grid-cols-4 gap-6">
        {properties?.map((property: any) => (
          <Property
            User={Logged?.userInfo}
            key={property?.name}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}
