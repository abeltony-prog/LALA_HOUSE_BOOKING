import React from "react";
import { Drawer } from "rsuite";
import PropertyDrawer from "./PropertyDetails/PropertyDrawer";

export default function Property({ property }: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        key={property.title}
        className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-lg"
      >
        <img
          alt={property.title}
          width={300}
          height={200}
          className="h-[200px] w-full object-cover"
          src={property.image || "/placeholder.svg"}
        />

        <div className="space-y-4 p-4">
          <div>
            <h3 className="font-medium">{property.title}</h3>
            <p className="text-sm text-gray-500">{property.location}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{property.beds}</span>
              <span>{property.baths}</span>
              <span>{property.area}</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-medium">${property.price}</span>
              <span className="text-sm text-gray-500">/m</span>
            </div>
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <PropertyDrawer property={property} />
      </Drawer>
    </>
  );
}
