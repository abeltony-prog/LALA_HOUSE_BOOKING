import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Router, useRouter } from "next/router";

export default function Sidebar({SessionDetails} : any) {
  const router = useRouter();
  const RedictURL = () => {
    router.push("/signin");
  };
  console.log(SessionDetails?.User);
  
  return (
    <>
      {/* Sidebar */}
      <div className="flex w-80 flex-col overflow-y-auto border-r p-6">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button className="flex-1 rounded-md bg-black py-2 px-4 text-white">
            Rent
          </button>
          <button className="flex-1 py-2 px-4 text-gray-600">Buy</button>
        </div>

        {/* Type of Place */}
        <div>
          <div className="mb-4 mt-4 flex justify-between">
            <h5 className="font-medium">{SessionDetails?.User?.role === "Renter" ? "Type of Place" : "Menu"}</h5>
          </div>
          {
            SessionDetails?.User?.role === "Renter" ? (
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
            ):(
              <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🏠", label: "Properties" },
              { icon: "🏠", label: "Bookings" },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors hover:border-gray-400 ${
                  item.label === "Properties"
                    ? "border-black"
                    : "border-gray-200"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
            )
          }
          
        </div>
        {
          SessionDetails?.User?.role === "Renter" && (
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
          )
        }
       

        <div className="mt-auto">
          {
            SessionDetails?.status === "authenticated" ? (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 shadow-md">
              {/* Profile Picture */}
              <img 
                   width={40}
                   height={40}
                   className="rounded-full border"
              src="https://cdn.pixabay.com/photo/2016/08/28/13/31/basic-1625962_640.png" alt="" />
            
            
              
              {/* User Info */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {SessionDetails.details?.name || "User Name"}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-2">
              {SessionDetails.User?.role || "User Role"}
              
              {/* Switch Role Link */}
              {
                SessionDetails.User?.hosts.length === 0 ? (
                  <button
                  className="text-blue-600 text-xs font-medium hover:underline"
                >
                  Become a Host
                </button>
                ):(
                  <button
                  className="text-blue-600 text-xs font-medium hover:underline"
                >
                  Switch to Hosting
                </button>
                )
              }
           
            </p>
              </div>
            </div>
            ):(
              <button
              onClick={RedictURL}
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
            >
              Sign In
            </button>
            )
          }
   
        </div>
      </div>
    </>
  );
}
