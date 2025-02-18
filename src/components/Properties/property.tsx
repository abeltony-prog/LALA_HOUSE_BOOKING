import React from "react";
import { Drawer } from "rsuite";
import PropertyDrawer from "./PropertyDetails/PropertyDrawer";

export default function Property({ property, User }: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        key={property.name}
        className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-lg"
      >
        <img
          alt={property.name}
          width={300}
          height={200}
          className="h-[200px] w-full object-cover"
          src={
            property?.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7o1w00FioBpklxaTPGkc2F8DtqFU5EZVlHbyYYLArTwJL7wJu7BV6aFduv-cj_xXgZA&usqp=CAU"
          }
        />

        <div className="space-y-4 p-4">
          <div>
            <h5 className="font-medium">{property.name}</h5>
            <p className="text-sm text-gray-500">{property.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{property.beds} bedrooms</span>
              <span>{property.bath} bath</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-medium">${property.cost}</span>
              <span className="text-sm text-gray-500">
                /{property?.per === "perMonth" ? "month" : "night"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <PropertyDrawer User={User} property={property} />
      </Drawer>
    </>
  );
}
