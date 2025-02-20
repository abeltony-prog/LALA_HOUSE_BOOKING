import React, { useContext, useState } from "react";
import { Drawer, Placeholder } from "rsuite";
import { useGetBookingsWhereUser_IdQuery } from "src/graphql/generated/graphql";
import BookingsTable from "./bookingsTable";
import { userAuth } from "context/auth";

export default function RentersBookings({ user_id }: any) {
  const Logged = useContext(userAuth) as unknown as any;

  const [open, setOpen] = useState(false);
  const {
    data: bookings,
    isLoading,
    refetch: refetchBookings,
  } = useGetBookingsWhereUser_IdQuery({
    user_id: user_id,
  });
  const handleOpenBookings = () => {
    try {
      refetchBookings();
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {[{ icon: "🕒", label: "Bookings" }].map((item) => (
        <button
          onClick={handleOpenBookings}
          key={item.label}
          className={`flex  items-center gap-2 rounded-xl border p-4 transition-colors hover:border-gray-400 ${
            item.label === "Apartment" ? "border-black" : "border-gray-200"
          }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
      <Drawer open={open} size={"full"} onClose={() => setOpen(false)}>
        <Drawer.Body>
          {isLoading ? (
            <Placeholder.Paragraph />
          ) : (
            <BookingsTable
              refetchBookings={refetchBookings}
              reservedBookings={bookings?.bookings}
              Loggeds={Logged}
            />
          )}
        </Drawer.Body>
      </Drawer>
    </>
  );
}
