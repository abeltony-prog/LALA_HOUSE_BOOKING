import React from "react";
import { useRouter } from "next/router";
import BecomeHostModel from "./hosts/becomeHostModel";
import { useUpdateUserRoleWhereUser_IdMutation } from "src/graphql/generated/graphql";
import { PuffLoader } from "react-spinners";
import RentersBookings from "@components/Properties/bookProperty/BookingsTable/RentersBookings";

let userRole: string;

export default function Sidebar({
  SessionDetails,
  refetch,
  filters,
  setFilters,
}: any) {
  const router = useRouter();
  const RedictURL = () => {
    router.push("/signin");
  };
  // console.log(SessionDetails?.User);

  if (SessionDetails?.User?.role === "Renter") {
    userRole = "Host";
  } else {
    userRole = "Renter";
  }
  const { mutate: SwitchUserRole, isLoading: switchingProfile } =
    useUpdateUserRoleWhereUser_IdMutation({
      onSuccess() {
        refetch();
      },
    });
  const SwitchUserProfile = () => {
    try {
      SwitchUserRole({
        user_id: SessionDetails?.User?.UID,
        role: userRole,
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (switchingProfile) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
        <PuffLoader color="#000000" />
      </div>
    );
  }

  const handleTypeChange = (type: string) => {
    setFilters((prev: any) => ({ ...prev, type }));
  };

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
            <h5 className="font-medium">
              {SessionDetails?.User?.role === "Renter"
                ? "Type of Place"
                : "Menu"}
            </h5>
          </div>
          {SessionDetails?.User?.role === "Renter" ? (
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🌍", label: "All" },
                { icon: "🏢", label: "Apartment" },
                { icon: "🏠", label: "Whole house" },
                { icon: "🏢", label: "Condo" },
                { icon: "🛏️", label: "Villa" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleTypeChange(item.label)}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors hover:border-gray-400 ${
                    filters.type === item.label
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          ) : (
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
          )}
        </div>
        {SessionDetails?.User?.role === "Renter" && (
          <div>
            <div className="mb-4 mt-4 flex justify-between">
              <h5 className="font-medium">More</h5>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <RentersBookings user_id={SessionDetails?.User?.UID} />
            </div>
          </div>
        )}

        <div className="mt-auto">
          {SessionDetails?.status === "authenticated" ? (
            <div className="flex items-center gap-3 rounded-lg bg-gray-100 p-3 shadow-md">
              {/* Profile Picture */}
              <img
                width={40}
                height={40}
                className="rounded-full border"
                src="https://cdn.pixabay.com/photo/2016/08/28/13/31/basic-1625962_640.png"
                alt=""
              />

              {/* User Info */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {SessionDetails.details?.name || "User Name"}
                </p>
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  {SessionDetails.User?.role || "User Role"}

                  {/* Switch Role Link */}
                  {SessionDetails.User?.hosts.length === 0 ? (
                    <BecomeHostModel
                      refetch={refetch}
                      user={SessionDetails?.User}
                    />
                  ) : (
                    <button
                      onClick={SwitchUserProfile}
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      {SessionDetails.User?.role === "Renter"
                        ? "Switch to Hosting"
                        : "Switch to Rentering"}
                    </button>
                  )}
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={RedictURL}
              className="w-full  bg-black py-3 text-white transition hover:bg-gray-800"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
}
