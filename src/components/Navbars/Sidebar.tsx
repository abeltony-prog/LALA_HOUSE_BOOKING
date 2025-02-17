import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Router, useRouter } from "next/router";

export default function Sidebar() {
  const router =  useRouter()
  const RedictURL = ()=>{
    router.push('/signin')
  }
  return (
    <>
 {/* Sidebar */}
<div className="w-80 flex flex-col border-r p-6 overflow-y-auto">
  <div className="flex rounded-lg bg-gray-100 p-1">
    <button className="flex-1 rounded-md bg-black py-2 px-4 text-white">
      Rent
    </button>
    <button className="flex-1 py-2 px-4 text-gray-600">Buy</button>
  </div>

  {/* Type of Place */}
  <div>
    <div className="mb-4 mt-4 flex justify-between">
      <h5 className="font-medium">Type of Place</h5>
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
            item.label === "Apartment" ? "border-black" : "border-gray-200"
          }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  </div>
  <div>
    <div className="mb-4 mt-4 flex justify-between">
      <h5 className="font-medium">Category</h5>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[
        { icon: "🌙", label: "Per Night" },
        { icon: "🕒", label: "Per Month" },

      ].map((item) => (
        <button
          key={item.label}
          className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors hover:border-gray-400 ${
            item.label === "Apartment" ? "border-black" : "border-gray-200"
          }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  </div>

  <div className="mt-auto">
    <button onClick={RedictURL} className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800">
      Sign In
    </button>
  </div>
</div>
    </>
  );
}
