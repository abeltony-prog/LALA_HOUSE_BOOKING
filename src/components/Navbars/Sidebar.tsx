import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-80 space-y-6 overflow-y-auto border-r p-6">
        {/* Rent/Buy Toggle */}
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button className="flex-1 rounded-md bg-black py-2 px-4 text-white">
            Rent
          </button>
          <button className="flex-1 py-2 px-4 text-gray-600">Buy</button>
        </div>

        {/* Type of Place */}
        <div>
          <div className="mb-4 flex justify-between">
            <h2 className="font-medium">Type of Place</h2>
            <button className="text-sm text-gray-500">See all types</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🏢", label: "Apartment" },
              { icon: "🏠", label: "Whole house" },
              { icon: "🏢", label: "Office" },
              { icon: "🛏️", label: "Room" },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors hover:border-gray-400 ${
                  item.label === "Apartment"
                    ? "border-black"
                    : "border-gray-200"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="mb-4 flex justify-between">
            <h2 className="font-medium">Price Range</h2>
            <button className="flex items-center gap-1 text-sm text-gray-500">
              Monthly
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="relative h-12 rounded-lg bg-gray-100">
              <div className="absolute left-[15%] right-[15%] top-1/2 h-1 rounded bg-black" />
              <div className="absolute left-[15%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-black" />
              <div className="absolute right-[15%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-black" />
            </div>
            <div className="flex justify-between text-sm">
              <span>$ 900</span>
              <span>$ 5500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
